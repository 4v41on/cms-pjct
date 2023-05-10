import React from 'react'
import moment from 'moment'

const PostDetail = ({post}) => { 




  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };



  return (
    <div className='bg-gray-300 shadow-lg rounded-lg lg:pt-0 pb-12 mb-8'>
<div className='relative overflow-hidden shadow-md mb-6'>
<img
src={post.featuredImage.url}
alt={post.title}
className="object-top h-full w-full rounded-t-lg "
/>
</div>
<div className='px-4 lg:px-0 '>
  <div className='flex items-center pl-3 gap-3 mb-8 w-full'>
  <div className="flex items-center gap-1  mb-2 lg:mb-0 w-full lg:w-auto">
        <img
        alt={post.author.name}
        height="30px"
        width="30px"
        className="align-middle rounded-full"
        src={post.author.photo.url}
        />
        <p className="font-bold inline align-middle text-gray-700">{post.author.name}</p>
        </div>
        <div className="font-medium md:flex-wrap flex gap-1 mt-2 text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
<span>
    {moment(post.createdAt).format('MM D, YY')}
</span>
 </div>
  </div>
  <h1 className='mb-8 uppercase text-black pl-3 text-3xl font-semibold'>{post.title}</h1>
  <div className='px-8 text-black'>
  {post.content.raw.children.map((typeObj, index)=>{
    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
  
  return getContentFragment(index, children, typeObj, typeObj.type)
  
  })}

  </div>

</div>
    </div>
  )
}

export default PostDetail
