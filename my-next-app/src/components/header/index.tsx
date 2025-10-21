'use client'

import Link from "next/link"
import { headerData } from "./data"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()

  return (
    <div>
      <ul className="flex justify-center items-center gap-2 pt-[2rem] text-sm font-medium text-gray-400">
        {headerData.map((item)=> {
          const isActive = pathname === item.href

          return (
          <li key={item.id}>
            <Link href={item.href} 
             className={`font-semibold flex items-center gap-2 px-4 py-2 rounded-xl border transition-all 
                ${
                  isActive
                    ? "text-white border-gray-600/60 bg-gray-800/40"
                    : "text-gray-400 hover:text-white hover:border-gray-600/60 hover:bg-gray-800/40 border-transparent"
                }`}>
              {item.name}
            </Link>
          </li>
        )})}
        
      </ul>
    </div>
  )
}

export default Header