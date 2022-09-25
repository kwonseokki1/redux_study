import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPost, getPost } from "../modules/post";
import Post from "../components/Post";
export default function PostContainer({ postId }) {
  const { loading, error, data } = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러...</div>;
  if (!data) return null;
  return <Post post={data} />;
}
