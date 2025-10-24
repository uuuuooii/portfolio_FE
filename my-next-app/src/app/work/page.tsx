'use client'

import Element from "@/components/element"
import { getProject } from "@/lib/api/project"
import ProjectProps from "@/lib/api/project/dto"
import { useEffect, useState } from "react"

const Work = () => {
  const [projectData, setProjectData] = useState<ProjectProps[]>([])

  useEffect(()=> {
    const getData = async() => {
      let res = await getProject()
      setProjectData(res)
    }
    getData()
  },[])

  return (
    <section className="flex justify-center items-center flex-col gap-[5rem] pt-[6rem] pb-[6rem] pl-[2rem] pr-[2rem]">
      <div className="max-w-[60%]">
        <h2 className="text-2xl font-extrabold">Selected Works</h2>
        <h3 className="text-[rgb(161_161_170)]">I've worked on a wide range of projects, from small startups to large corporations. Here are some of my favorites.</h3>
      </div>
      
      <ul className="
      flex 
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


