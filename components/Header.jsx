import React, { useContext, useEffect, useState  } from 'react'

import Link from 'next/link';

const categories = [{name: 'React', slug: 'react'},{name:'Web Dev', slug:'web-dev'} ]


import { getCategories } from "../services"






const Header = () => {


  const [categories, setCategories] = useState([])

  useEffect(() =>{
    getCategories()
    .then((newCategories) => setCategories(newCategories))

  },[]);

  return (
<div className="container mx-auto px-10 mb-8" >
   <div className=' w-full inline-block py-8 '>
      <div className="flex justify-center border-b border-green-500">
           <Link href="/">
           <span className='logo cursor-pointer  font-bold text-4xl text-white'>
                HERMES
           </span>
           </Link>
      </div>

      <div className='hidden md:contents'>
          <div className="flex justify-center text-center">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-sans font-extrabold uppercase hover:text-green-500 cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
