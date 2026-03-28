import type { Ref } from "react";

interface InputProps{
    placeholder:string;
    Reference?:Ref<any>;
};

export const InputBox=(props:InputProps)=>{
    return (
        <input ref={props.Reference} placeholder={props.placeholder} type="text" className="border-2 border-[#000000] rounded-lg h-10 w-70 bg-slate-300 text-lg" />
    )
};