import type { ReactElement } from "react";
import { useState } from "react";



export interface ButtonProps{
    onClick?:()=>void;
    text:string;
    endIcon?:ReactElement;
    startIcon?:ReactElement;
    variant:"primary" | "secondary";
};



const defaultStyle="rounded-md flex items-center p-4 m-3";

export const Button=(props:ButtonProps)=>{
    const [clicked,setClicked]=useState(false);

    const variantStyle={
    "primary":!clicked ? "bg-[#5046e4] text-[#bfbbf4] font-medium flex items-center text-md":"bg-[#d4daf9] text-[#8b86dd] font-medium flex items-center text-md",
    "secondary":!clicked ? "bg-[#d4daf9] text-[#8b86dd] font-medium flex items-center text-md":"bg-[#5046e4] text-[#bfbbf4] font-medium flex items-center text-md"
};


    return <button className={`${variantStyle[props.variant]} ${defaultStyle}} ${"cursor-pointer"}`} onClick={
        ()=>{
            props.onClick && props.onClick();
            setClicked(true);
             setTimeout(()=>{
                setClicked(false);
             },200);
        }
    }>
        {props.startIcon ? (
            <div className="pr-2 cursor-pointer">
                {props.startIcon}
            </div>
        ):null}
        {props.text}
    </button>
};