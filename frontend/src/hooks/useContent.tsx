import axios from "axios"
import { BackendUrl } from "../Config";
import { useEffect, useState } from "react";

export const useContent=()=>{
    const [content,setContent]=useState([{}]);

    function refreshContent(){
        axios.get(`${BackendUrl}/user/get-all-content`,{withCredentials:true}).then(
            (res)=>{
                setContent(res.data.data);
            }
        ).catch((err)=>{
            console.log(err);
        });
    };


    useEffect(()=>{
        refreshContent();
        
        const IntervalId=setInterval(()=>{
            refreshContent();
        },100);

        return () => clearInterval(IntervalId);
    },[]);

    return content;
};