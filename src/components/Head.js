import { Hamburger, Search } from '../images/Icons';
import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_AUTO_SUGGESTIONS } from '../utils/constants';

export const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [showSuggestions, setshowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTO_SUGGESTIONS + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div>
      <div className="grid grid-flow-col p-2 m-2 shadow-lg">
        <div className="flex col-span-2">
          <button className="-mt-2" onClick={() => togglemenuHandler()}>
            <Hamburger />
          </button>
          <img src={logo} className="h-6" alt="logo" />
        </div>

        <div className="col-span-8 ">
          <div>
            <input
              type="text"
              placeholder="Search Here"
              className="border-solid align-top border-2 py-1 px-4 border-gray-100 rounded-l-full w-2/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setshowSuggestions(true)}
              onBlur={() => setshowSuggestions(false)}
            />
            <button className="align-top border-solid border-2 py-1 px-4 border-gray-100 rounded-r-full">
              <Search />
            </button>
          </div>

          {showSuggestions && (
            <div className="absolute bg-white py-2 px-5 w-[37rem]  shadow-lg rounded-lg border-gray-100">
              <ul>
                {suggestions.map((name) => (
                  <li className="p-2 shadow-sm hover:bg-gray-100">{name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-2">
          <UserCircleIcon className="h-6  text-black-500" />
        </div>
      </div>
    </div>
  );
};
