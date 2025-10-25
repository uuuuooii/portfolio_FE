import ProjectProps from "@/lib/api/project/dto"
import Link from "next/link"
import { useState } from "react"

interface ElementProps {
  item: ProjectProps
}

const Element = ({item}:ElementProps) => {
  const [isClick, setIsClick] = useState(false)

  return (
    <div className="
    pt-[2rem] 
    opacity-50 
    hover:opacity-100 
    active:opacity-100 
    transition-opacity 
    duration-100">
      {item.link ? 
        <Link href={item.link} target="_blank" onClick={()=> setIsClick(!isClick)} 
        className="
        pt-[2rem] 
        opacity-50 
        hover:opacity-100 
        active:opacity-100 
        transition-opacity 
        duration-100"
        >
          <p className="text-xs text-[rgb(161_161_170)]">{item.date}</p>
          <p className="text-xl font-semibold text-[rgb(255_255_255)]">{item.company}</p>
          <p>{item.role}</p>

          <img className="pt-[1rem] w-[100%] max-w-[500px]" src={item.img} alt="img" />
        </Link>
      :  
        <div onClick={()=> setIsClick(!isClick)} 
        
        >
          <p className="text-xs text-[rgb(161_161_170)]">{item.date}</p>
          <p className="text-xl font-semibold text-[rgb(255_255_255)]">{item.company}</p>
          <p>{item.role}</p>

          <img className="pt-[1rem] w-[100%] max-w-[500px]" src={item.img} alt="img" />
        </div>
        }
    </div>
    
   
  )
}

export default Element