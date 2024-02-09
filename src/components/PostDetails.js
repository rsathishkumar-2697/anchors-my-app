import React from 'react';

function PostDetails() {
  return (
    <div className="container">
      <div className="left">
        <h2>All Posts</h2>
        <div>
          <h3>This is Post Title</h3>
          <p>12 Comment 10 Reply</p>
          <p>Comments</p>
          <ul>
            <li>Jimmy: This is the First Comment for this post</li>
            <li>Dhruv: This is the Second Comment for this post</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h2>All Posts (10)</h2>
        <div>
          <h3>This is the post description for this topic, Lorem Ipsum...</h3>
          <p>12 Comment 10 Reply</p>
          <p>Comments</p>
          <ul>
            <li>Jimmy: This is the First Comment for this post</li>
            <li>Dhruv: This is the Second Comment for this post</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
