import type { ReactElement } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import axios from "axios";
import { BackendUrl } from "../../Config";

interface CardProps {
  heading: string;
  leftIcon?: ReactElement;
  RightFirstIcon?: ReactElement;
  RightSecondIcon?: ReactElement;
  Type: "youtube" | "twitter";
  link: any;
  tags?: string[];
  timestamp?:string;
  contentId:string;
}

// const data=useContext(LeftSideBarContext);


export const Card = (props: CardProps) => {
  return (
    <div className="max-w-82 h-fit flex-row items-center justify-center gap-5 bg-white border-slate-300 border-2 rounded-lg p-3 shadow-md hover:border-[#281fd4] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#8b86dd]/50 hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <div className="text-[#8b86dd] cursor-pointer hover:text-[#281fd4]">{props.leftIcon}</div>
          <div className="text-lg font-bold">{props.heading}</div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="text-[#8b86dd] text-lg cursor-pointer hover:text-[#281fd4]">{props.RightFirstIcon}</div>
          <div className="text-[#8b86dd] text-lg cursor-pointer hover:text-[#281fd4]" onClick={()=>{
            axios.delete(`${BackendUrl}/user/delete-content/${props.contentId}`,{withCredentials:true});
          }}>{props.RightSecondIcon}</div>
        </div>
      </div>
      <div className="rounded-md py-4">
        {props.Type === "youtube" ? (
          <div className="w-full">
            <iframe
              className="rounded-lg flex items-center justify-center"
              src={
                props.link?.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${props.link.split("/")[3]?.split("?")[0]}`
                  : props.link?.includes("youtube.com/watch")
                  ? `https://www.youtube.com/embed/${props.link.split("v=")[1]?.split("&")[0]}`
                  : props.link
              }
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
        {props.Type === "twitter" ? (
          <div className="w-full flex items-center justify-center">
            <TwitterTweetEmbed tweetId={props.link.split("/status/")[1]?.split("?")[0]} 
            />
          </div>
        ) : null}
      </div>
      <div className="flex gap-2">
        {props.tags ? (props.tags.map((t)=>{
            return (
                <div className="rounded-3xl flex justify-center items-center px-2 border-[#8b86dd] bg-[#d4daf9] text-[#8b86dd]">{`#${t}`}</div>
            )
        })):null}
      </div>
      <div className="m-3 text-[#bcbbd4]">
        {`Added on ${props.timestamp}`}
      </div>
    </div>
  );
};
