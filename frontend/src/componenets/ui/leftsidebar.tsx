import type { ReactElement } from "react";
import { BrainIcon } from "../../assets/BrainIcon";

interface LeftSideBarProps{
    arr:{
        Icon:ReactElement;
        text:string;
    }[];
}

export const LeftSideBar=(props:LeftSideBarProps)=>{
    return (
        <div className="flex flex-col w-[23%] gap-2 border-2 h-screen mr-4">
            <div className="flex items-center p-2.5">
                <div><BrainIcon/></div>
                <div className="text-[#000000] text-3xl font-bold">Second Brain</div>
            </div>
            <div className="flex flex-col justify-center p-2.5 ml-7 cursor-pointer">
                {props.arr?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div>{item.Icon}</div>
                        <div className="font-bold relative w-fit group cursor-pointer">
                            <span>{item.text}</span>
                            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7a92c9] transition-all duration-300 group-hover:w-full"></span>
                        </div>
                        {/* <div className="font-bold hover:underline transition-all duration-1000">{item.text}</div> */}
                    </div>
                ))}
            </div>
        </div>
    )
};