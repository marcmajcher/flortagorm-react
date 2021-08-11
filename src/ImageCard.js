import Comments from './Comments';
import { useState } from 'react';

export default function ImageCard({ flort }) {
  const { comments, image, likes, title } = flort;

  const [commentList, setCommentList] = useState(comments);
  const [imageSrc, setImageSrc] = useState(image);
  const [numLikes, setNumLikes] = useState(likes);
  const [flortTitle, setFlortTitle] = useState(title);

  function incrementLikes(e) {
    setNumLikes(numLikes + 1);
  }

  return (
    <div className="image-card">
      <h2>{flortTitle}</h2>
      <img alt="Flort" src={imageSrc} className="image" />
      <div className="likes-section">
        <button onClick={incrementLikes} className="like-button">
          👍
        </button>
        <span className="likes">
          {numLikes} Likes
        </span>
      </div>

      <Comments comments={commentList} />

      <form className="comment-form">
        <input
          className="comment-input"
          type="text"
          name="comment"
          placeholder="Add a comment..."
        />
        <button className="comment-button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
