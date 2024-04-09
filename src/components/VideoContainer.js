import React from 'react';
import { useEffect, useState } from 'react';
import { youtube_API_URL } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideosList = async () => {
    const videosList = await fetch(youtube_API_URL);
    const json = await videosList.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideosList();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
