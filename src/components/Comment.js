import React from 'react';

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-green-100">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
        className=" w-12 p-2"
        alt="user icon"
      />

      <div>
        <p className="font-bold"> {name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
