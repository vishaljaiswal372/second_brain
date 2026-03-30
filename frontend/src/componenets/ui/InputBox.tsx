import type { Ref } from "react";

interface InputProps{
    placeholder:string;
    Reference?:Ref<any>;
    onChange?:()=>void;
};

export const InputBox=(props:InputProps)=>{
    return (
        <input onChange={props.onChange} ref={props.Reference} placeholder={props.placeholder} type="text" className="border-2 border-[#000000] rounded-lg h-10 w-70 bg-slate-300 text-lg" />
    )
};