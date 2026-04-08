import { useRef, useState } from "react";
import { CrossIcon } from "../../assets/CrossIcon";
import { Button } from "./button";
import { InputBox } from "./InputBox";
import axios from "axios";
import { BackendUrl } from "../../Config";

interface AddContentProps{
    openBox:Boolean;
    onClose?:()=>void;
};

export const AddContentBox=(props:AddContentProps)=>{

    const headingRef=useRef<any>(null);
    const linkRef=useRef<any>(null);
    const [TypeOofContent, setTypeOfContent] = useState<"youtube" | "twitter">("youtube");

    async function AddContent(){
        const heading=headingRef.current?.value;
        const link=linkRef.current?.value;
        const Type=TypeOofContent;
        await axios.post(`${BackendUrl}/user/add-content`,{
            title:heading,
            link:link,
            type:Type,
            tags:["productivity","notes"]
        },{withCredentials: true});
        props.onClose && props.onClose();
    }


    return ( props.openBox ? (<div className="absolute h-screen w-full bg-black/20 ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-80 w-85 bg-gray-100 border border-black rounded-lg flex flex-col items-center justify-center p-3 gap-3">
                <div className="text-[#8c95c4] flex justify-center items-center m-2 gap-4 w-full">
                    <div className="text-[#2c3c89] font-bold text-xl underline decoration-solid">Add Content</div>
                    <div className="text-black font-bold cursor-pointer" onClick={props.onClose}><CrossIcon/></div>
                </div>
                <div className="flex flex-col gap-3">
                    <InputBox Reference={headingRef} placeholder="Heading"/>
                    <InputBox Reference={linkRef} placeholder="Link"/>
                </div>
                <div className="flex gap-8">
                    <Button text="youtube" variant="secondary" onClick={()=>{setTypeOfContent("youtube")}}/>
                    <Button text="twitter" variant="primary" onClick={()=>{setTypeOfContent("twitter")}}/>
                </div>
                <div>
                    <Button text="Submit" variant="primary" onClick={AddContent}/>
                </div>
            </div>
        </div>) : null )
};
