import { Route, Routes } from "react-router-dom"
import DashBoard from "./Pages/Dashboard"
import { SignIn } from "./Pages/Signin"
import { SignUp } from "./Pages/signup"


function App() {

  return (
  <>
    <Routes>
      <Route element={<DashBoard/>} path="/dashboard" />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>
  </>
  )
}

export default App
