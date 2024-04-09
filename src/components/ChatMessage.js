import React from 'react';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="felx items-center inline-flex shadow-md p-2">
      <UserCircleIcon className="h-6  text-black-500" />

      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
