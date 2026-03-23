import type { ReactElement } from "react";

export interface ButtonProps{
    onClick?: ()=> void;
    text:string;
    endIcon?:ReactElement;
    startIcon?:ReactElement;
    variant:"primary" | "secondary";
};

const variantStyle={
    "primary":"bg-[#5046e4] text-[#bfbbf4] font-medium flex items-center text-lg",
    "secondary":"bg-[#d4daf9] text-[#8b86dd] font-medium flex items-center text-lg",
};

const defaultStyle="rounded-md flex items-center p-4 md m-3";

export const Button=(props:ButtonProps)=>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle}}`}>
        <div className="pr-2">
            {props.startIcon}
        </div>
        {props.text}
    </button>
};