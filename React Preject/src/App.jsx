

import {Routes, Route} from 'react-router-dom'
import About from './pages/about.jsx'
import Home from "./pages/Home.jsx"
export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  )
}



