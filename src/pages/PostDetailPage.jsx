import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetailPage.css';

const PostDetailPage = ({ posts, addCommentToPost }) => {
    const { postId } = useParams();
    const post = posts.find((p) => p.id === parseInt(postId));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-detail-container">
            <h1>Post Details</h1>
            <div className="post-detail">
                <div className="post-content">
                    <p>{post.content}</p>
                    <div className="post-controls">
                        <span>{post.votes} Votes</span>
                    </div>
                </div>
                <div className="comments-section">
                    <h4>Comments</h4>
                    {post.comments.length > 0 ? (
                        post.comments.map((comment, index) => (
                            <Comment
                                key={index}
                                comment={comment}
                                postId={post.id}
                                addCommentToPost={addCommentToPost}
                            />
                        ))
                    ) : (
                        <p>No comments yet. Be the first to comment!</p>
                    )}
                    <AddCommentForm postId={post.id} addCommentToPost={addCommentToPost} />
                </div>
            </div>
        </div>
    );
};

const Comment = ({ comment, postId, addCommentToPost }) => {
    const [reply, setReply] = useState('');
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleAddReply = () => {
        if (reply.trim()) {
            const newReply = {
                id: Date.now(),
                content: reply,
                replies: [],
            };
            addCommentToPost(postId, newReply, comment.id);
            setReply('');
            setShowReplyForm(false);
        }
    };

    return (
        <div className="comment">
            <p>{comment.content}</p>
            <button onClick={() => setShowReplyForm(!showReplyForm)}>
                {showReplyForm ? 'Cancel' : 'Reply'}
            </button>
            {showReplyForm && (
                <div className="add-comment">
                    <textarea
                        placeholder="Add a reply..."
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <button onClick={handleAddReply}>Reply</button>
                </div>
            )}
            {comment.replies && comment.replies.length > 0 && (
                <div className="replies">
                    {comment.replies.map((reply, index) => (
                        <Comment
                            key={index}
                            comment={reply}
                            postId={postId}
                            addCommentToPost={addCommentToPost}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const AddCommentForm = ({ postId, addCommentToPost }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
        if (comment.trim()) {
            const newComment = {
                id: Date.now(),
                content: comment,
                replies: [],
            };
            addCommentToPost(postId, newComment);
            setComment('');
        }
    };

    return (
        <div className="add-comment">
            <textarea
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Comment</button>
        </div>
    );
};

export default PostDetailPage;