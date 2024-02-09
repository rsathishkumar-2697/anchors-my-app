import React from 'react';

function AllPosts() {
  return (
    <div className="container">
      <div className="left">
        <h2>All Posts</h2>
        <ul>
          <li>This is Post Title <span>12 Comment 10 Reply</span></li>
          <li>This is Post 2 Title <span>1 Comment 5 Reply</span></li>
        </ul>
      </div>
      <div className="right">
        <h2>All Posts (10)</h2>
      </div>
    </div>
  );
}

export default AllPosts;
