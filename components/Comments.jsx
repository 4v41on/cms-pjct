import React, {useState, useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '@/services';
import { Result } from 'postcss';
const Comments = ({ slug }) => {
  const [comments, setcomments] = useState([]);

useEffect(() => {
 getComments(slug)
 .then((result) => setcomments(result))
},[])


  return (
    <>
    {comments.length > 0 &&(
      <div className='border border-green-500 shadow-lg rounded-lg p-8 pb-12 mb-8 '>
           <h3 className='text-xl mb-8 font-semibold border-b border-green-500 pb-4 text-white'>
              {comments.length}
              {''} Comments
           </h3>
           {comments.map((comment)=> (
<div key={comment.createdAt} className='border-b border-green-500 mb-4 pb-4 '>
<p className='mb-4'>
  <span className='font-semibold'>{comment.name}</span>
  {''} on   { '' }
  {moment(comment.createdAt).format('MMM DD, YY')}
</p>
<p className='whitespace-pre-line text-gray-300 w-full'>{parse(comment.comment)}</p>
</div>

           ))}
      </div>
    )}
    </>
  )
}

export default Comments
