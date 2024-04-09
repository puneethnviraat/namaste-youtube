import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeid } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState('');
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {ChatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: 'Punith',
              message: liveMessage,
            })
          );
          setLiveMessage('');
        }}
      >
        <input
          className="w-84  p-2 ml-2 border border-black"
          text="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="w-24 p-2 m-2 bg-green-100">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
