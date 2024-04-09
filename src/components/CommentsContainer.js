import React from 'react';
import Comment from './Comment';
const commentsData = [
  {
    name: 'Name 4',
    text: 'mmhmghm lorem10 ipsum esfas adsfs fvxcvvdf  asg',
    replies: [],
  },
  {
    name: 'Name 1',
    text: 'fgbfg lorem10 ipsum esfas adsfs fvxcvvdf  asg',
    replies: [
      {
        name: 'Name 4',
        text: 'mmhmghm lorem10 ipsum esfas adsfs fvxcvvdf  asg',
        replies: [],
      },
      {
        name: 'Name 1',
        text: 'fgbfg lorem10 ipsum esfas adsfs fvxcvvdf  asg',
        replies: [
          {
            name: 'Name 4',
            text: 'mmhmghm lorem10 ipsum esfas adsfs fvxcvvdf  asg',
            replies: [],
          },
          {
            name: 'Name 1',
            text: 'fgbfg lorem10 ipsum esfas adsfs fvxcvvdf  asg',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Name 8',
    text: 'lor  emdfhgf10 ipsum esfas adsfs fvxcvvdf  asg',
    replies: [],
  },
];
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h2 className="font-bold text-2xl">Comments: </h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
