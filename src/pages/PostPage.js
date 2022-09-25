import React from "react";
import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";
export default function PostPage({}) {
  const params = useParams();

  return <PostContainer postId={parseInt(params.id, 10)} />;
}
