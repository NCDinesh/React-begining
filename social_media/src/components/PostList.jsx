import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

let PostList = () => {
  let { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.key} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
