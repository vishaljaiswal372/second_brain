import type { ReactElement } from "react";

export interface ButtonProps{
    onClick?: ()=> void;
    text:string;
    endIcon?:ReactElement;
    startIcon?:ReactElement;
    variant:"primary" | "secondary";
};

const variantStyle={
    "primary":"hover:bg-blue-600 text-white font-medium",
    "secondary":"hover:bg-gray-300 text-gray-800 font-medium",
};

const defaultStyle="rounded-md flex items-center p-4 md";

export const Button=(props:ButtonProps)=>{
    return <button className={`${variantStyle[props.variant]} ${defaultStyle}}`}>
        {props.startIcon}
        {props.text}
    </button>
};