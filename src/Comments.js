export default function Comments({ comments }) {

  console.log("------ starting Com ments -------");
  console.log("COMONENTS", comments)


  return (
    <ul className="comments">
      {comments.map((comment) => <li key={comment.id}>{comment.content}</li>)}
    </ul>
  );
}
