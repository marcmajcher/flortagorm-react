import { useState } from 'react';

export default function CommentForm({ addComment }) {
  const [commentText, setCommentText] = useState('');

  return (
    <div className="comment-form">
      <input
        onChange={(e) => setCommentText(e.target.value)}
        className="comment-input"
        type="text"
        value={commentText}
        placeholder="Add a comment..."
      />
      <button
        className="comment-button"
        onClick={() => {
          addComment(commentText);
          setCommentText('');
        }}
      >
        Post
      </button>
    </div>
  );
}
