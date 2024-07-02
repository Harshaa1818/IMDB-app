import { Routes,Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import SignInPage from "./pages/SignIn"
import Moneymul from "./pages/Moneymul"


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/contact' element={<ContactPage/>}></Route>
      <Route path='/Signin' element={<SignInPage/>}></Route>
      <Route path='/moneymul' element={<Moneymul/>}></Route>
      

    </Routes>
    
    
    </>
  )
}

export default App
