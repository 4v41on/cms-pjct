
import Head from 'next/head'
import { PostCard,Categories, PostWidget} from '../components';
import {getPosts} from '../services'
import { FeaturedPosts } from '../sections';


export default function Home({ posts }) {
  return (
    <main
      className="container mx-auto px-10 mb-8 "
    >
      <Head>
        <title>HERMES//BLOG</title>
      </Head>
      <FeaturedPosts/>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-8 col-span-1'>
      {posts.map((post, index)=> (<PostCard post={post.node} key={post.title}/>))}
      </div>

      
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:stick relative top-8">
            <Categories/>
                <PostWidget />
               
      </div>
      </div>
      </div>
     
    </main>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}