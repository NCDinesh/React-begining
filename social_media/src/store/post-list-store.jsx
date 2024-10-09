import { createContext, useReducer } from "react";

export let PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

let postListReducer = (currPostList, action) => {
  return currPostList;
};

let PostListProvider = ({ children }) => {
  let [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  let addPost = () => {};

  let deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}>
      {children}
    </PostList.Provider>
  );
};

let DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mustang",
    body: "Hi Friends , I am going to Mustang for my vacations. Hope to enjoy alot",
    reactions: 2,
    userID: "user-9",
    tags: ["vacation", "Mustang", "enjoying"],
  },
  {
    id: "2",
    title: "Going to Manang",
    body: "Hi  , I am going to Manang for my weeding. Wish me married life",
    reactions: 4,
    userID: "user-10",
    tags: ["weeding", "Manang"],
  },
];

export default PostListProvider;
