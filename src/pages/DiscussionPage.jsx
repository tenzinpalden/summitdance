import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DiscussionPage.css';  

const DiscussionPage = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          content: newPost,
          votes: 0,
          comments: [],
        },
      ]);
      setNewPost('');
    }
  };

  return (
    <div className="discussion-container">
      <h1>Discussion Page</h1>
      <div className="new-post">
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-content">
              <Link to={`/post/${post.id}`}>
                <p>{post.content}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;