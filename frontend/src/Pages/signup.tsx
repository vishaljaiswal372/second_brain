import { BlurCircle } from "../componenets/ui/blurcircle";
import { Button } from "../componenets/ui/button";
import { InputBox } from "../componenets/ui/InputBox";

export const SignUp=()=>{
    return (
    <>
    <div className=" h-screen w-screen bg-amber-200 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 h-70 bg-white w-100 rounded-lg border-2">
            <div className="text-xl font-bold">SignUp</div>
            <div className="flex flex-col gap-4 cursor-pointer">
                <InputBox placeholder="username"/>
                <InputBox placeholder="password"/>
            </div>
            <div>
                <Button variant="primary" text="Submit"/>
            </div>
        </div>
    </div>
    </>
    )
};