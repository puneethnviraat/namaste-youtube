import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = [
    'ALl',
    'music',
    'cricket',
    'Cooking',
    'News',
    'Comedy',
    'Sports',
  ];
  return (
    <div className="flex">
      {list.map((category) => (
        <Button name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
