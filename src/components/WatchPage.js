import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex flex-col col-span-7">
        <div className="px-5">
          <iframe
            width="640"
            height="300"
            src={'https://www.youtube.com/embed/' + searchParams.get('v')}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      <div className="col-span-3">
        <h2> Live Chat</h2>
        <LiveChat />
      </div>
    </>
  );
};

export default WatchPage;
