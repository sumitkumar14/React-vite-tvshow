import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Counter from '@/components/Counter';
import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import About from "@/components/About";

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Vite + React</h1>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
      <Counter/>
      <div className="card">
      <Button onClick={() => setCount((count) => count + 1)} variant="primary">count is {count}</Button>
      </div>
    </>
  )
}

export default App
