import { useNavigate } from "react-router-dom"
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='homediv'>
    <h1>
      Hello, World
    </h1>
    <button className='buttonLink' onClick={()=>navigate("/about")}> About Section </button>
  </div>

  )
}

export default Home
