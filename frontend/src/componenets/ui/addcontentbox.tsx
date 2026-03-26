import { CrossIcon } from "../../assets/CrossIcon";
import { Button } from "./button";
import { InputBox } from "./InputBox";

interface AddContentProps{
    openBox:Boolean;
    onClose:()=>void;
};

export const AddContentBox=(props:AddContentProps)=>{
    return ( props.openBox ? (<div className="absolute h-screen w-full bg-black/20 ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-80 w-85 bg-gray-100 border border-black rounded-lg flex flex-col items-center justify-center p-3 gap-3">
                <div className="text-[#8c95c4] flex justify-center items-center m-2 gap-4 w-full">
                    <div className="text-[#2c3c89] font-bold text-xl underline decoration-solid">Add Content</div>
                    <div className="text-black font-bold cursor-pointer" onClick={props.onClose}><CrossIcon/></div>
                </div>
                <div className="flex flex-col gap-3">
                    <InputBox placeholder="Heading"/>
                    <InputBox placeholder="Link"/>
                </div>
                <div>
                    <Button text="Submit" variant="primary"/>
                </div>
            </div>
        </div>) : null )
};
