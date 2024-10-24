import { useCallback } from "react";
import { createContext, useReducer, useState, useEffect } from "react";

export let PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

let postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

let PostListProvider = ({ children }) => {
  // const [fetching, setfetching] = useState(false);
  let [postList, dispatchPostList] = useReducer(postListReducer, []);

  let addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  let deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  // useEffect(() => {
  //   setfetching(true);

  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setfetching(false);
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
