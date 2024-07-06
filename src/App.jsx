import { Routes,Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"

import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import SignInPage from "./pages/SignIn"
import Moneymul from "./pages/Moneymul"
import FavMovie from "./pages/Fav-Movie"


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
      <Route path="/fav-list" element={<FavMovie nam={'harshal'}/>}></Route>
      

    </Routes>
    
    
    </>
  )
}

export default App
