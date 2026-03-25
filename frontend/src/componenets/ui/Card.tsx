import type { ReactElement } from "react";

interface CardProps {
  heading: string;
  leftIcon?: ReactElement;
  RightFirstIcon?: ReactElement;
  RightSecondIcon?: ReactElement;
  Type: "youtube" | "twitter";
  link?: string;
  tag?: string[];
  timestamp?:string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="max-w-82 flex-row items-center justify-center gap-5 m-5 border-slate-300 border-2 rounded-lg p-3 shadow-[#8b86dd] shadow-1xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center justify-center">
          <div className="text-[#8b86dd]">{props.leftIcon}</div>
          <div className="text-md font-semibold">{props.heading}</div>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <div className="text-[#8b86dd] text-lg">{props.RightFirstIcon}</div>
          <div className="text-[#8b86dd] text-lg">{props.RightSecondIcon}</div>
        </div>
      </div>
      <div className="rounded-md m-5">
        {props.Type === "youtube" ? (
          <div className="w-full">
            <iframe
              className="rounded-lg flex items-center justify-center"
              src="https://www.youtube.com/embed/BLAH?showinfo=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : null}
        {props.Type === "twitter" ? (
          <div className="w-full flex items-center justify-center">
            <iframe
              className="rounded-lg"
              src="https://www.youtube.com/embed/BLAH?showinfo=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe> 
          </div>
        ) : null}
      </div>
      <div className="flex gap-2">
        {props.tag ? (props.tag.map((t)=>{
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
