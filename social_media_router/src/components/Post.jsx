import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

let Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  // Check if reactions is an object and extract the values
  const likes = post.reactions?.likes ?? 0; // Fallback to 0 if reactions is undefined
  const dislikes = post.reactions?.dislikes ?? 0; // Fallback to 0 if reactions is undefined
  const totalReactions = likes + dislikes; // Total reactions

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
            <AiFillDelete />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {totalReactions} people (Likes:{" "}
            {likes}, Dislikes: {dislikes})
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
