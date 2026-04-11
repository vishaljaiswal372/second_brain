import { Route, Routes } from "react-router-dom"
import DashBoard from "./Pages/Dashboard"
import { SignIn } from "./Pages/Signin"
import { SignUp } from "./Pages/signup"
import { UserSharedContent } from "./Pages/UserSharedContent"


function App() {

  return (
  <>
    <Routes>
      <Route element={<DashBoard/>} path="/dashboard" />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/brain/share/:shareLink" element={<UserSharedContent/>}/>
    </Routes>
  </>
  )
}

export default App
