import  AppBar from '@/components/AppBar'
import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";
import ShowTvSeries from '@/Views/ShowTvseries'

import './App.css'

function App() {
  return (
    <>
    <AppBar/>
    <h1>Vite + React</h1>
     <Routes>
      <Route path="/" element={<ShowTvSeries />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
