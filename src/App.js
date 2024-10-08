import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TibetanPage from './pages/TibetanPage';
import BhutanesePage from './pages/BhutanesePage';
import NepaliPage from './pages/NepaliPage';
import DiscoverMorePage from './pages/DiscoverMorePage'; // Update the import
import HeaderComponent from './components/header';
import NavbarComponent from './components/navbar';
import Footer from './components/footer';
import VideoDetailPage from './pages/VideoDetailPage';
import BhutanVideoDetailPage from './pages/BhutanVideoDetailPage';
import DiscussionPage from './pages/DiscussionPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
    const [posts, setPosts] = useState([]);

    const addCommentToPost = (postId, comment, parentId = null) => {
        setPosts(posts.map(post => {
            if (post.id === parseInt(postId)) {
                if (parentId) {
                    // Find the parent comment and add the reply
                    const addReplyToComment = (comments) => {
                        return comments.map(c => {
                            if (c.id === parentId) {
                                return {
                                    ...c,
                                    replies: [...c.replies, comment],
                                };
                            } else if (c.replies && c.replies.length > 0) {
                                return {
                                    ...c,
                                    replies: addReplyToComment(c.replies),
                                };
                            } else {
                                return c;
                            }
                        });
                    };
                    return {
                        ...post,
                        comments: addReplyToComment(post.comments),
                    };
                } else {
                    return {
                        ...post,
                        comments: [...post.comments, comment],
                    };
                }
            }
            return post;
        }));
    };

    return (
        <Router>
            <HeaderComponent />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/discover" element={<DiscoverMorePage />} /> {/* Update this route */}
                <Route path="/tibetan" element={<TibetanPage />} />
                <Route path="/bhutanese" element={<BhutanesePage />} />
                <Route path="/nepali" element={<NepaliPage />} />
                <Route path="/video/:videoId" element={<VideoDetailPage />} />
                <Route path="/bhutan/video/:videoId" element={<BhutanVideoDetailPage />} />
                <Route path="/discussion" element={<DiscussionPage posts={posts} setPosts={setPosts} />} />
                <Route path="/post/:postId" element={<PostDetailPage posts={posts} addCommentToPost={addCommentToPost} />} />
                <Route path="/discover" element={<DiscoverMorePage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;