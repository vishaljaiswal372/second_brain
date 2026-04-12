import { Button } from '../componenets/ui/button'
import { AddIcon } from '../assets/AddIcon'
import { ShareIcon } from '../assets/ShareIcon'
import { Card } from '../componenets/ui/Card'
import { DeleteIcon } from '../assets/DeleteIcon'
import { AddContentBox } from '../componenets/ui/addcontentbox'
import { useState } from 'react'
import { LeftSideBar } from '../componenets/ui/leftsidebar'
import { TweetIcon } from '../assets/TweetIcon'
import { YoutubeIcon } from '../assets/YoutubeIcon'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BackendUrl } from '../Config';
import AllContentIcon from '../assets/AllContentIcon'
import { LogoutIcon } from '../assets/LogoutIcon'

export const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const time=date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return `${day}/${month}/${year} at ${time}`;
};

const LeftSideBarContent=[{
    Icon:<AllContentIcon/>,
    text:"All Content"
  },{
    Icon:<TweetIcon/>,
    text:"Tweets"
  },{
    Icon:<YoutubeIcon/>,
    text:"Youtube"
  }]

function DashBoard() {
  const [open,SetContentBox]=useState(false);

  const [selected,setSelected]=useState<"All Content" | "Youtube" | "Tweets">("All Content");

  const content=useContent();

  function ShareLink() {
    axios.post(`${BackendUrl}/user/brain/share`,{
    share:true
    },{withCredentials:true}).then((res)=>{
      const link=res.data.data.hash;
      const shareLink=`http://localhost:5173/brain/share/${link}`;
      navigator.clipboard.writeText(shareLink);
      alert("link copied to clipboard!");
    });
};

  return (
  <>
    <AddContentBox openBox={open} onClose={()=>{SetContentBox(false)}}/>
    <div className='flex'>
      <LeftSideBar  arr={LeftSideBarContent} setSelectedContent={setSelected}/>
    <div className='flex flex-col w-full gap-3 bg-slate-100 p-4'>
      <div className='flex items-center justify-between'>
        <div className='text-3xl font-bold'>All Notes</div>
        <div className='flex gap-3 p-2'>
          <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />} onClick={ShareLink} />
          <Button variant='primary' text='Add Content' startIcon={<AddIcon />} onClick={()=>{SetContentBox(true)}}/>
          <div className='cursor-pointer flex' onClick={()=>{
            axios.post(`${BackendUrl}/user/sign-out`,{withCredentials:true}).then(()=>{
              setTimeout(()=>{
                window.location.href="/signin";
              },10000);
            });
          }}>
            <LogoutIcon />
          </div>
        </div>
      </div>
      <div className='flex gap-5 flex-wrap' >
        {/* <Card heading='Twitter tweet' Type='twitter' leftIcon={<AddIcon/>} RightFirstIcon={<ShareIcon/>} RightSecondIcon={<DeleteIcon/>} tag={["productivity","notes"]} link="https://x.com/elonmusk/status/1844467059083596120" timestamp="2024-01-01"/> */}
        {content.map((item: any) => (
          <Card
            selectedContent={selected}
            key={item._id}
            heading={item.title}
            Type={item.type}
            leftIcon={<AddIcon />}
            RightFirstIcon={<ShareIcon />}
            RightSecondIcon={<DeleteIcon />}
            tags={item.tag}
            link={item.link}
            timestamp={formatDate(item.createdAt)}
            contentId={item._id}
          />
        ))}
      </div>
    </div>
    </div>
  </>
  )
}

export default DashBoard;