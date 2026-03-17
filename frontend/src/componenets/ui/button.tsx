export interface ButtonProps{
    size: "sm" | "md" | "lg";
    onClick: ()=> void;
    text:string;
    endIcon?:any;
    startIcon:any;
    variant:"primary" | "secondary";
};

export const Button=async(props:ButtonProps)=>{

    return <button></button>
};