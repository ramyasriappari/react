import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const k=[{name:"DashBoard",to:'/dashboard'},{name:"About",to:'/about'}]
  return (
    <div>
    <center>
    <h1>Welcome To Home</h1>
    {
   k.map((r)=>{
    return(
        <div>
        <Link to={r.to}>{r.name}
        
        </Link>
        </div>
    )

   })
}
   
    </center>
      
    </div>
  )
}

export default Home
