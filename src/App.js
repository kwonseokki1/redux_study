import { Route, Routes } from "react-router-dom";
import "./App.css";
import PostListPage from "./containers/PostListContainer";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
