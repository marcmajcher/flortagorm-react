import Comments from './Comments';
import LikesSection from './LikesSection';
import CommentForm from './CommentForm';
import { useState } from 'react';

export default function ImageCard({ flort }) {
  let { comments, id, image, likes, title } = flort;
  const [commentList, setCommentList] = useState(comments);

  function addComment(content) {
    const comment = {
      id: Math.random(),
      imageId: id,
      content,
    };
    setCommentList([...commentList, comment]);
  }

  return (
    <div className="image-card">
      <h2>{title}</h2>
      <img alt="Flort" src={image} className="image" />
      <LikesSection likes={likes} />
      <Comments comments={commentList} />
      <CommentForm addComment={addComment} />
    </div>
  );
}
