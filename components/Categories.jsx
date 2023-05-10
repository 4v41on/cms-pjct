import { useEffect, useState } from "react"
import Link  from "next/link"
import { getCategories } from "../services"

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() =>{
    getCategories()
    .then((newCategories) => setCategories(newCategories))

  },[]);
  return (
    <div className=' text-white shadow-lg rounded-lg pl-0  mb-8'>
    <h3 className='text-xl mb-8 font-semibold text-center'>
      Cats.
    </h3>
    {categories.map((category)=>(

      <Link key={category.slug} href={`/category/${category}.slug`}>
      <span className="ease-[cubic-bezier(.09,-0.46,.82,1.65)] duration-300 hover:text-5xl hover:text-green-500 cursor-pointer block pb-4 mb-4 text-left text-6xl uppercase font-bold font-['monument'] leading-10 ">
           {category.name}
      </span>
      </Link>
    ))}
    </div>
  )
}

export default Categories
