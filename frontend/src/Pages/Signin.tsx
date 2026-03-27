import { Button } from "../componenets/ui/button";
import { InputBox } from "../componenets/ui/InputBox";
import { BlurCircle } from "../componenets/ui/blurcircle";

export const SignIn=()=>{
    return (
    <div className="bg-amber-100 h-screen w-screen relative flex justify-center items-center">
        <BlurCircle color="#3b82f6" top={100} left={100} />
        <BlurCircle color="#a855f7" bottom={100} right={100} />
        <BlurCircle color="#06b6d4" top={200} right={200} />
        <div className="flex flex-col justify-center items-center z-10 gap-3 h-70 bg-white w-100 rounded-lg border-2">
            <div className="text-xl font-bold">SignIn</div>
            <div className="flex flex-col gap-4 cursor-pointer">
                <InputBox placeholder="username"/>
                <InputBox placeholder="password"/>
            </div>
            <div>
                <Button variant="primary" text="Submit"/>
            </div>
        </div>
    </div>
    )
};