
export default function LikesSection({ likes, incrementLikes, decrementLikes }) {
  return (
    <section className="likes-section">
      <button onClick={incrementLikes} className="like-button">
        👍
      </button>
      <span className="likes">{likes} Likes</span>
      <button onClick={decrementLikes} className="like-button">
        👎
      </button>
    </section>
  );
}
