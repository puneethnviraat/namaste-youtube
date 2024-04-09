import React from 'react';
import {
  HomeIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div className="p-5 col-span-1 ">
        <ul>
          <li>
            <HomeIcon className="h-5  text-black-500  block" />
          </li>
          <li>
            {' '}
            <MusicalNoteIcon className="h-5 mr-1  block text-black-500  align-top" />
          </li>
          <li>
            <VideoCameraIcon className="h-5 mr-1  text-black-500 align-top" />
          </li>
          <li>
            <GlobeAltIcon className="h-5 mr-1  text-black-500 i align-top" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="p-5 col-span-2 w-36 shadow-md">
        <ul>
          <li>
            <HomeIcon className="h-5  text-black-500 inline-table align-top" />
            Home
          </li>
          <li>
            <MusicalNoteIcon className="h-5 mr-1  text-black-500 inline-table align-top" />
            Shorts
          </li>
          <li>
            <VideoCameraIcon className="h-5 mr-1  text-black-500 inline-table align-top" />
            Videos
          </li>
          <li>
            <GlobeAltIcon className="h-5 mr-1  text-black-500 inline-table align-top" />
            Live
          </li>
        </ul>
        <h2 className="font-bold my-2">Subscriptions</h2>
        <ul>
          <li>Subscriptions</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h2 className="font-bold my-2">Lists</h2>
        <ul>
          <li>Subscriptions</li>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    );
  }
};

export default Sidebar;
