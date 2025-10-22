import Element from "@/components/element"

const Work = () => {
  return (
    <section className="flex justify-center items-center flex-col gap-[5rem] pt-[6rem] pb-[6rem] pl-[2rem] pr-[2rem]">
      <div className="max-w-[60%]">
        <h2 className="text-2xl font-extrabold">Selected Works</h2>
        <h3>I've worked on a wide range of projects, from small startups to large corporations. Here are some of my favorites.</h3>
      </div>
      
      <ul className="
      flex 
      justify-center 
      items-center 
      gap-[2rem]  
      border-t 
      border-zinc-800
      ">
        <li>
          <Element />
        </li>
        <li>
          <Element />
        </li>
        <li>
          <Element />
        </li>
      </ul>
    </section>
  )
}

export default Work