import { useRef } from "react";
import { BlurCircle } from "../componenets/ui/blurcircle";
import { Button } from "../componenets/ui/button";
import { InputBox } from "../componenets/ui/InputBox";
import axios from "axios";
import { BackendUrl } from "../Config";

export const SignUp=()=>{

    const usernameRef=useRef<any>();
    const passwordRef=useRef<any>();

    async function  signup(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        await axios.post(`${BackendUrl}`,{
            username,
            password
        });
        alert(`${username} is Sign-Up`);
    };



    return (
    <>
    <div className=" h-screen w-screen relative bg-black flex justify-center items-center">
        <BlurCircle color="#a855f7" top={100} left={100} />
        <BlurCircle color="#ec4899" bottom={100} right={100} />
        <BlurCircle color="#f59e0b" top={200} right={200} />
        <div className="flex flex-col z-10 justify-center items-center gap-3 h-70 bg-white w-100 rounded-lg border-2">
            <div className="text-xl font-bold">SignUp</div>
            <div className="flex flex-col gap-4 cursor-pointer">
                <InputBox Reference={usernameRef} placeholder="username"/>
                <InputBox Reference={passwordRef} placeholder="password"/>
            </div>
            <div>
                <Button variant="primary" text="Submit"/>
            </div>
        </div>
    </div>
    </>
    )
};