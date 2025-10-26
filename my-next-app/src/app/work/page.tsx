'use client'

import Element from "@/components/element"
import { getProject } from "@/lib/api/project"
import ProjectProps from "@/lib/api/project/dto"
import { useEffect, useState } from "react"

const Work = () => {
  const [projectData, setProjectData] = useState<ProjectProps[]>([])
  

  useEffect(()=> {
    const getData = async() => {
      const res = await getProject()
      setProjectData(res)
    }
    getData()
  },[])

  return (
    <section className="
      flex 
      justify-center 
      items-center
      flex-col 
      gap-[5rem] 
      pt-[6rem] 
      pb-[6rem] 
      pl-[1rem] 
      pr-[1rem]
      sm:pl-[2rem] 
      sm:pr-[2rem]
    ">
      <div className="
      max-w-[100%]
      ">
        <h2 className="text-2xl font-extrabold">Selected Works</h2>
        <h3 className="text-[rgb(161_161_170)]">
          Software Engineer with 3 years of experience focused on frontend,<br />
          SEO optimization, and scalable web apps. <br />
          Proven record of leading end-to-end projects, launching 3 products, and improving site performance by 38%
        </h3>
      </div>
      
      <ul className="
      grid
      grid-cols-1
      sm:grid-cols-2
      justify-center 
      items-center 
      gap-[1.5rem]  
      border-t 
      border-zinc-800
      ">
      {projectData.map((item)=> (
        <li key={item._id}>
          <Element item={item} />
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Work


