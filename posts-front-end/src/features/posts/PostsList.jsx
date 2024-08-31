import React, {useEffect, useState} from "react";
import { API_URL } from "../../contants";

function PostsList() {
    const [posts, setPosts] = useState([])
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(`${API_URL}/posts`);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("An error occurred.");
                console.log("An error occurred: ", e);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <div>
            <h1>Posts List</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Description</th>
                        <th scope={"col"}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {posts.map((post) => {
                    return (
                        <tr key={post.id}>
                            <td>{post.name}</td>
                            <td>{post.description}</td>
                            <td>Borrar</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default PostsList;