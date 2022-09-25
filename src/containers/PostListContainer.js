import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../modules/post";
import PostList from "../components/PostList";

export default function PostListContainer({}) {
  const { data, loading, error } = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러...</div>;
  if (data)
    return (
      <div>
        <PostList posts={data} />
      </div>
    );
}
