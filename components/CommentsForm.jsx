import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';
import { comment } from 'postcss';


const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEL =useRef();
  const nameEL =useRef();
  const emailEL =useRef();
  const storeDateEL =useRef();

  useEffect(() =>{
    nameEL.current.value = window.localStorage.getItem('name')
    emailEL.current.value = window.localStorage.getItem('email')

  },[])
  

  const handleCommentSubmission = () => {

    setError(false);

    const { value: comment } = commentEL.current;
    const { value: name } = nameEL.current;
    const { value: email } = emailEL.current;
    const { checked: storeData } = storeDateEL.current;




    if(!comment|| !name|| !email ){
      setError(true)
    }
const commentObj = { name, email, comment, slug}

if (storeData){
  window.localStorage.setItem('name',name);
  window.localStorage.setItem('email',email);
}
else {
  window.localStorage.removeItem('name',name);
  window.localStorage.removeItem('email',email);

}


submitComment(commentObj)
.then((res)=>{
  setShowSuccessMessage(true);
  setTimeout(()=>{
    setShowSuccessMessage(false);
  }, 3000);
})

  }

  return (
    <div className="border border-green-500 shadow-lg rounded-md p-8 pb-12 mb-8">
    <h3 className="text-xl  font-['monument'] mb-8  border-b border-green-500 pb-4">COMMENTS</h3>
    <div className="grid grid-cols-1 gap-4 mb-4">
      <textarea 
      ref={commentEL}
      className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 border bg-green-500 bg-opacity-0 border-green-500 text-white font-['monospace']" name="comment" 
      placeholder="_" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <input 
      type="text" 
      ref={nameEL}
      className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 border bg-green-500 bg-opacity-0 border-green-500 text-white uppercase" placeholder="Name" name="name" />
      <input 
      type="email" 
      ref={emailEL}
      className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 border bg-green-500 bg-opacity-0 border-green-500 text-white uppercase" placeholder="Email" name="email" />
    </div>
    <div className="grid grid-cols-1 gap-4 mb-4">
      <div>
      <input 
      className='bg-green-500' 
      ref={storeDateEL}
      type="checkbox" id="storeData" 
      name="storeData" value="true" />
          <label 
          className="text-gray-500 cursor-pointer" 
          htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
      </div>
    </div>
    {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
    <div className="mt-8">
      <button 
      type="button" 
      onClick={handleCommentSubmission} 
      className="transition duration-300 transform hover:-translate-y-1 hover:bg-indigo-900 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
      {showSuccessMessage &&
      <span className="text-md float-right font-semibold mt-3 text-green-500">
        Comment submitted for review</span>}
    </div>
  </div>
  )
}

export default CommentsForm
