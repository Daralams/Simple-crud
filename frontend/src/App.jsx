import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import AddMenu from "./components/AddMenu"
import EditMenu from "./components/EditMenu"
import PageError from "./components/PageError"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
        element={<><Navbar/>
        <MainSection/></>
        }/>
        <Route path="/addMenu" 
        element={<><Navbar/>
        <AddMenu/></>
        }/>
        <Route path="/editMenu/:id" 
        element={
        <><Navbar/>
        <EditMenu/></>
        }/>
        <Route path="*" 
        element={
        <><Navbar/>
        <PageError/></>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
