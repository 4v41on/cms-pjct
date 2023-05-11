import moment from "moment"
import Link from 'next/link'

const PostCard = ({post }) => {

    console.log('🎈',post);
  return (
    
  
      <div className="bg-gray-100 shadow-lg rounded-lg  p-0 lg:p-8 pb-12 mb-8">
        <h1 className='ease-in-out  cursor-pointer  duration-500 font-sans text-6xl hover:text-7xl font-extrabold tracking-tighter '>NEWS</h1>
<div className="relative overflow-hidden shadow-md pb-80 mb-6">
    <img
    src={post.featuredImage.url}
    alt={post.title}
    className="object-top absolute h-80 w-full  object-fill shadow-lg rounded-t-lg lg:rounded-lg"
    />

</div>
<h1 className="ease-in-out  cursor-pointer  duration-500 font-sans text-center  mb-3 
      hover:text-pink-600  uppercase tracking-tighter text-3xl font-extrabold
     ">
        <Link href={`/post/${post.slug}`}>
            {post.title}
        </Link>
      </h1>
      <div className=" block lg:flex righ text-center items-start  mb-4 w-full">
        <div className="flex gap-3 items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8">
        <img
        alt={post.author.name}
        height="30px"
        width="30px"
        className="align-middle rounded-full"
        src={post.author.photo.url}
        />
        <p className="font-bold inline align-middle text-gray-700">{post.author.name}</p>
        </div>
        <div className="font-medium flex gap-2 mt-2 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
<span>
    {moment(post.createdAt).format('MM D, YY')}
</span>
 </div>
  </div>
  <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
  <div className='text-center'>
    <Link href={`/post/${post.slug}`}>
        <span className="transition duration-300 transform hover:-translate-y-1 inline-block bg-green-500 rounded-md p-3  font-extrabold uppercase font-['monument']">
        seguir leyendo
        </span>
    </Link>
  </div>
 </div>

  )
}

export default PostCard
