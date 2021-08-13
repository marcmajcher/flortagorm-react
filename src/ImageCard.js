import Comments from './Comments';
import LikesSection from './LikesSection';
import CommentForm from './CommentForm';

export default function ImageCard({
  flort,
  incrementLikes,
  decrementLikes,
  addComment,
}) {
  const { comments, id, image, likes, title } = flort;

  return id ? (
    <div className="image-card">
      <h2>{title}</h2>
      <img alt="Flort" src={image} className="image" />
      <LikesSection
        likes={likes}
        incrementLikes={incrementLikes}
        decrementLikes={decrementLikes}
      />
      <Comments comments={comments ? comments : []} />
      <CommentForm addComment={addComment} />
    </div>
  ) : (
    ''
  );
}
