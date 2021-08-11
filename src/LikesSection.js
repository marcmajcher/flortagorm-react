import { useState } from 'react';

export default function LikesSection({ likes }) {
  const [numLikes, setNumLikes] = useState(likes);

  function incrementLikes() {
    setNumLikes(numLikes + 1);
  }

  function decrementLikes() {
    setNumLikes(numLikes - 1);
  }

  return (
    <section className="likes-section">
      <button onClick={incrementLikes} className="like-button">
        👍
      </button>
      <span className="likes">{numLikes} Likes</span>
      <button onClick={decrementLikes} className="like-button">
        👎
      </button>
    </section>
  );
}
