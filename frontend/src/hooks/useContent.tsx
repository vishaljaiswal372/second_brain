import axios from "axios"
import { BackendUrl } from "../Config";
import { useEffect, useState } from "react";

export const useContent=()=>{
    const [content,setContent]=useState([{}]);
    useEffect(()=>{
        axios.get(`${BackendUrl}/user/get-all-content`,{withCredentials:true}).then(
            (res)=>{
                setContent(res.data.data);
            }
        ).catch((err)=>{
            console.log(err);
        });
    },[]);
    return content;
};