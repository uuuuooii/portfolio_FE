import ProjectProps from "@/lib/api/project/dto"

interface ElementProps {
  item: ProjectProps
}

const Element = ({item}:ElementProps) => {
  return (
    <div className="pt-[2rem]">
      <p className="text-xs text-[rgb(161_161_170)]">{item.date}</p>
      <p className="text-xl text-[rgb(255_255_255)]">{item.company}</p>
      {/* <p>{item.role}</p> */}

      <img className="pt-[1rem]" src={item.img} alt="img" />
    </div>
  )
}

export default Element