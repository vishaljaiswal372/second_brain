import { Button } from './componenets/ui/button'
import { AddIcon } from './assets/AddIcon'
import { ShareIcon } from './assets/ShareIcon'
import { Card } from './componenets/ui/Card'
import { DeleteIcon } from './assets/DeleteIcon'

function App() {
 
  return (
    <>
      <div className='flex gap-2 m-2'>
        <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />} />
        <Button variant='primary' text='Add Content' startIcon={<AddIcon />} />
      </div>
      <div>
        <Card heading='Twitter tweet' Type='twitter' leftIcon={<AddIcon/>} RightFirstIcon={<ShareIcon/>} RightSecondIcon={<DeleteIcon/>} tag={["productivity","notes"]}/>
      </div>
    </>
  )
}

export default App
