import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import '../src/App.css'

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

