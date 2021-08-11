
export default function ImageCard(props) {
  return (
    <div class="image-card">
      <h2 id="fg-title">Image Title Goes Here</h2>
      <img alt="Flort" src="./imb/image-placeholder.jpg" className="image" />
      <div class="likes-section">
        <button id="like-button" class="like-button">
          👍
        </button>
        <span id="fg-likes" class="likes">
          X Likes
        </span>
      </div>
      <ul id="fg-comments" class="comments">
        <li>This is a fake thing</li>
        <li>Replace us all with real things</li>
        <li>Release us from this deception</li>
      </ul>
      <form id="comment-form" class="comment-form">
        <input
          class="comment-input"
          type="text"
          name="comment"
          placeholder="Add a comment..."
        />
        <button class="comment-button" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
