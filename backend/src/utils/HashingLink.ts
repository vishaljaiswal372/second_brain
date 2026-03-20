export const hashing=(len:number)=>{
    let str="qwertyuioooopasdfghjklzxcvbnm";
    let hash="";
    for(let i=0;i<len;i++){
        hash+=str[Math.floor(Math.random()*len)];
    }
    return hash;
};