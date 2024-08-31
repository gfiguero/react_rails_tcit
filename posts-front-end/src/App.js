import './App.css';
import axios from "axios";
import Posts from "./components/posts";
import {useEffect, useState} from "react";

const API_URL = "http://localhost:3000/api/v1/posts"

function getApiData() {
    return axios.get(API_URL).then((response) => response.data)
}
function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let mounted = true;
        getApiData().then((items) => {
            if (mounted) {
                setPosts(items);
            }
        });
        return () => (mounted = false);
    }, []);
    return (
        <div className="App">
            <Posts posts={posts} />
        </div>
    );
}

export default App;
