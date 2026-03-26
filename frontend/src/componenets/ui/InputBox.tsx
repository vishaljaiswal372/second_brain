interface InputProps{
    placeholder:string;
};

export const InputBox=(props:InputProps)=>{
    return (
        <input placeholder={props.placeholder} type="text" className="border-2 border-[#000000] rounded-lg h-10 w-70 bg-slate-300 text-lg cursor-pointer" />
    )
};