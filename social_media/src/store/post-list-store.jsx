import { createContext } from "react";

PostList = createContext({});

let PostListProvider = ({ children }) => {
  return <PostList.Provider value={[]}>{children}</PostList.Provider>;
};

export default PostListProvider;
