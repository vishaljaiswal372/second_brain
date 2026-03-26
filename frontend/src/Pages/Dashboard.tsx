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

function DashBoard() {
  const [open,SetContentBox]=useState(false);

  const LeftSideBarContent=[{
    Icon:<TweetIcon/>,
    text:"Tweets"
  },{
    Icon:<YoutubeIcon/>,
    text:"Videos"
  }]

  return (
  <>
    <AddContentBox openBox={open} onClose={()=>{SetContentBox(false)}}/>
    <div className='flex'>
      <LeftSideBar arr={LeftSideBarContent}/>
      <div className='flex flex-col w-full pt-6 gap-3'>
      <div className='flex items-center justify-between'>
        <div className='text-3xl font-bold'>All Notes</div>
        <div className='flex gap-3 p-2'>
          <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />} />
          <Button variant='primary' text='Add Content' startIcon={<AddIcon />} onClick={()=>{SetContentBox(true)}}/>
        </div>
      </div>
      <div className='flex gap-3'>
        <Card heading='Twitter tweet' Type='twitter' leftIcon={<AddIcon/>} RightFirstIcon={<ShareIcon/>} RightSecondIcon={<DeleteIcon/>} tag={["productivity","notes"]}/>
      </div>
      </div>
    </div>
  </>
  )
}

export default DashBoard;