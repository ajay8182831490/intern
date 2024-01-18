import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyPost = () => {
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3600/v1/user/post`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    },
                });

                if (!response.ok) {
                    throw new Error(`Server returned ${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                setUserPosts(json);
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            }
        };

        fetchData();
    }, [navigate]);

    return (
        <div>
            <h1>My Posts</h1>
            {userPosts.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userPosts.map((post) => (
                            <tr key={post.postId}>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default MyPost;
