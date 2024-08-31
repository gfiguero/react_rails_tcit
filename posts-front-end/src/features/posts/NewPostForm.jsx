import {useState} from "react";
import {API_URL} from "../../contants";

function NewPostForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const postData = {name, description};
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        });
        if (response.ok) {
            const { id } = await response.json();
        } else {
            console.log("An error occurred.");
        }
    }

    return (
        <div>
            <h1>New Post Form</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type={"submit"}>Post</button>
                </div>
            </form>
        </div>
    );
}

export default NewPostForm;