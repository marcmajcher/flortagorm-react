export default function Comments({ comments }) {
  return (
    <ul className="comments">
      {comments.map((comment) => <li key={comment.id}>{comment.content}</li>)}
    </ul>
  );
}
