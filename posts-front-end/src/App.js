import './App.css';
import PostsList from "./features/posts/PostsList";
import NewPostForm from "./features/posts/NewPostForm";

function App() {
    return (
        <div className="App">
            <PostsList />
            <NewPostForm />
        </div>
    );
}

export default App;
