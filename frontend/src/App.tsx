import { Button } from './componenets/ui/button'
import { AddIcon } from './assets/AddIcon'
import { ShareIcon } from './assets/ShareIcon'
import { Card } from './componenets/ui/Card'
import { DeleteIcon } from './assets/DeleteIcon'
import { AddContentBox } from './componenets/ui/addcontentbox'
import { useState } from 'react'

function App() {
  const [open,SetContentBox]=useState(false);
  return (
  
    <div className='flex flex-col'>
      <div><AddContentBox openBox={open} onClose={()=>{SetContentBox(false)}}/></div>
      <div className='flex gap-2 m-2'>
        <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />} />
        <Button variant='primary' text='Add Content' startIcon={<AddIcon />} onClick={()=>{SetContentBox(false)}}/>
      </div>
      <div>
        <Card heading='Twitter tweet' Type='twitter' leftIcon={<AddIcon/>} RightFirstIcon={<ShareIcon/>} RightSecondIcon={<DeleteIcon/>} tag={["productivity","notes"]}/>
      </div>
    </div>
  )
}

export default App
