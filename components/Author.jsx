import React from 'react';

const Author = ({ author }) => {
  return (
    <div
      className="flex flex-col justify-center items-center my-8 p-12 border border-green-500 rounded-md"
    >
      <img
        alt={author.name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
      <h3 className="text-white mt-4 my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;