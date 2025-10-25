'use client'

import { useState } from "react"
import Login from "./login"
import Project from "./project"

const Admin = () => {
    const [isLogin, setIsLogin] = useState(false)
    
    const display = {
        0: <Project />,
        1: <Login setIsLogin={setIsLogin}/>
    }
    
  return (
    <div>
          {display[isLogin? 0:1]}  
    </div>
  )
}

export default Admin