import { Button } from './componenets/ui/button'
import { AddIcon } from './assets/AddIcon'
import { ShareIcon } from './assets/ShareIcon'

function App() {
 
  return (
    <>
      <div className='flex gap-2 m-2'>
        <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon />} />
        <Button variant='primary' text='Add Content' startIcon={<AddIcon />} />
      </div>
    </>
  )
}

export default App
