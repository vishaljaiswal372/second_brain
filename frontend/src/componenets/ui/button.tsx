import type { ReactElement } from "react";




export interface ButtonProps{
    SetContent:(openBox:Boolean)=>Boolean;
    text:string;
    endIcon?:ReactElement;
    startIcon?:ReactElement;
    variant:"primary" | "secondary";
};

const variantStyle={
    "primary":"bg-[#5046e4] text-[#bfbbf4] font-medium flex items-center text-md",
    "secondary":"bg-[#d4daf9] text-[#8b86dd] font-medium flex items-center text-md",
};

const defaultStyle="rounded-md flex items-center p-4 m-3";

export const Button=(props:ButtonProps)=>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle}}`} onClick={()=>(props.SetContent(true))}>
        {props.startIcon ? (
            <div className="pr-2 cursor-pointer">
                {props.startIcon}
            </div>
        ):null}
        {props.text}
    </button>
};