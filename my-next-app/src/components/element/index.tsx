import ProjectProps from "@/lib/api/project/dto"
import Image from "next/image"
import Link from "next/link"

interface ElementProps {
  item: ProjectProps
}

const Element = ({item}:ElementProps) => {

  return (
    <div className="
    pt-[2rem] 
    opacity-50 
    hover:opacity-100 
    active:opacity-100 
    transition-opacity 
    duration-100">
      {item.link ? 
        <Link href={item.link} target="_blank"  
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

          <Image 
          width={390}
          height={237} 
          className="pt-[1rem]" src={item.img} alt="img" />
        </Link>
      :  
        <div
        >
          <p className="text-xs text-[rgb(161_161_170)]">{item.date}</p>
          <p className="text-xl font-semibold text-[rgb(255_255_255)]">{item.company}</p>
          <p>{item.role}</p>

          <Image
            width={390}
            height={237}  
            className="pt-[1rem]" src={item.img} alt="img" />
        </div>
        }
    </div>
    
   
  )
}

export default Element