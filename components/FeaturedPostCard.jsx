import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (

  
  <div className="card-post group/item relative cursor-pointer  bg-center bg-no-repeat bg-cover shadow-md rounded-full h-60 w-full ease-[cubic-bezier(.09,-0.46,.82,1.65)] duration-1000 hover:bg-left " style={{ backgroundImage: `url('${post.featuredImage.url}')` }}> 


 <div className="absolute rounded-full bg-center  bg-gradient-to-b opacity-40 from-gray-400 via-gray-800 to-black w-full h-60 bg-ble nd-multiply" />

     <div className="flex flex-col items-center absolute bottom-5 w-full justify-center">
     <p className='text-white ease-in-out duration-300 group/edit opacity-0 group-hover/item:opacity-100 font-["monument"] '>VIEW NOW</p>
    
        <p className="inline align-middle uppercase font-sans  text-white text-shadow ml-2 font-medium">{post.title}</p>
        <p className="text-white align.  mb-4 text-shadow font-semibold text-xs">{moment(post.createdAt).format('MMM DD, YY')}</p>
      </div>

      <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    
  </div>
);

export default FeaturedPostCard;