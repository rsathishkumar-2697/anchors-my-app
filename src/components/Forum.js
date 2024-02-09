import React from 'react';

function Forum() {
  return (
    <div className="forum-container">
      <div className="left-panel">
        <h2>All Posts</h2>
        
      </div>
      <div className="right-panel">
        <div className="post-details">
          <h2>All Posts (10)</h2>
          
        </div>
        <div className="post">
          <h3>This is Post Title</h3>
          <p>This is the post description for this topic, Lorem Ipsum is simply dummy text...</p>
          <button>+ Create Post</button>
          <div className="post-comments">
            <h3>12 Comment    10 Reply</h3>
            
            <div className="comment">
              <p>Comments</p>
              <ul>
                <li>Jimmy: This is the First Comment for this post</li>
                <li>Dhruv: This is the Second Comment for this post</li>
                <li>
                  Ravi: This is the reply to this comment
                  <ul>
                    <li>Ravi: Another Reply for this comment</li>
                    <li>Ravi: One More Reply for this comment</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
