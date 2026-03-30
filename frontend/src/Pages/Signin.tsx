import { Button } from "../componenets/ui/button";
import { InputBox } from "../componenets/ui/InputBox";
import { BlurCircle } from "../componenets/ui/blurcircle";
import axios from "axios";
import { BackendUrl } from "../Config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn=()=>{

    const usernameRef=useRef<any>(null);
    const passwordRef=useRef<any>(null);
    const navigate=useNavigate();

    async function  signin(){
        const username=usernameRef.current?.value;
        const password=passwordRef.current?.value;
        const res=await axios.post(`${BackendUrl}/user/sign-in`,{
            username,
            password
        });
        localStorage.setItem("token",res.data.token);
        navigate("/dashboard");
    };

    return (
    <div className="bg-amber-100 h-screen w-screen relative flex justify-center items-center">
        <BlurCircle color="#3b82f6" top={100} left={100} />
        <BlurCircle color="#a855f7" bottom={100} right={100} />
        <BlurCircle color="#06b6d4" top={200} right={200} />
        <div className="flex flex-col justify-center items-center z-10 gap-3 h-70 bg-white w-100 rounded-lg border-2">
            <div className="text-xl font-bold">SignIn</div>
            <div className="flex flex-col gap-4 cursor-pointer">
                <InputBox  Reference={usernameRef} placeholder="username"/>
                <InputBox  Reference={passwordRef} placeholder="password"/>
            </div>
            <div>
                <Button variant="primary" text="Submit" onClick={signin}/>
            </div>
        </div>
    </div>
    )
};