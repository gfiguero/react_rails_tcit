import React from "react";

function Posts(props) {
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
                {props.posts.map((post) => {
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

export default Posts;