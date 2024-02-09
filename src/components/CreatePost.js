import React from 'react';
function CreatePost() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <form>
        <input type="text" placeholder="Enter Post Title" />
        <textarea placeholder="Describe your post..."></textarea>
        <button>Post Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
