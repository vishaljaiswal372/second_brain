import { Card } from '../componenets/ui/Card'
import { LeftSideBar } from '../componenets/ui/leftsidebar'
import { useContent } from '../hooks/useContent'
import { TweetIcon } from '../assets/TweetIcon'
import { YoutubeIcon } from '../assets/YoutubeIcon'
import { AddIcon } from '../assets/AddIcon'
import { ShareIcon } from '../assets/ShareIcon'
import { DeleteIcon } from '../assets/DeleteIcon'
import {formatDate} from './Dashboard'


const LeftSideBarContent=[{
    Icon:<TweetIcon/>,
    text:"Tweets"
  },{
    Icon:<YoutubeIcon/>,
    text:"Videos"
  }]

export const UserSharedContent=()=>{
    const content=useContent();
    return (
      <>
        <div className='flex'>
          <LeftSideBar arr={LeftSideBarContent}/>
        <div className='flex flex-col w-full gap-7 bg-slate-100 p-4'>
          <div className='flex items-center pt-2 justify-between'>
            <div className='text-3xl font-bold'>All Notes</div>
          </div>
          <div className='flex gap-5 flex-wrap' >
            {/* <Card heading='Twitter tweet' Type='twitter' leftIcon={<AddIcon/>} RightFirstIcon={<ShareIcon/>} RightSecondIcon={<DeleteIcon/>} tag={["productivity","notes"]} link="https://x.com/elonmusk/status/1844467059083596120" timestamp="2024-01-01"/> */}
            {content.map((item: any) => (
              <Card
                key={item._id}
                heading={item.title}
                Type={item.type}
                leftIcon={<AddIcon />}
                RightFirstIcon={<ShareIcon />}
                RightSecondIcon={<DeleteIcon />}
                tags={item.tag}
                link={item.link}
                timestamp={formatDate(item.createdAt)}
                contentId={item._id} // used for deleting particular content of user
              />
            ))}
          </div>
        </div>
        </div>
      </>
      )
};