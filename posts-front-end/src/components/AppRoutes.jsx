import React from "react";
import { Route, Routes} from "react-router-dom";
import PostsList from "../features/posts/PostsList";

function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<PostsList />} />
        </Routes>
    );
}

export default AppRoutes;