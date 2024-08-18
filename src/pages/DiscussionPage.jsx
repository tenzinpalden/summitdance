import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DiscussionPage.css';  


const DiscussionPage = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState('');
  const [newVideo, setNewVideo] = useState(null);

  const addPost = () => {
    if (newPost.trim() || newVideo) {
      setPosts([
        ...posts,
        {
          id: Date.now(),
          content: newPost,
          videoUrl: newVideo ? URL.createObjectURL(newVideo) : null,
          votes: 0,
          comments: [],
        },
      ]);
      setNewPost('');
      setNewVideo(null); // Clear video input after posting
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewVideo(file);
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
        <input 
          type="file" 
          accept="video/*" 
          onChange={handleVideoUpload} 
        />
        <button onClick={addPost}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-content">
              <Link to={`/post/${post.id}`}>
                <p>{post.content}</p>
                {post.videoUrl && (
                  <video controls width="320" height="240"> {/* Adjust the width and height as needed */}
                    <source src={post.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionPage;