import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

let CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    // userIdElement.current.value = " ";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // likesElement.current.value = "";
    // dislikesElement.current.value = "";

    tagsElement.current.value = "";
    const postReactions = {
      likes: likes,
      dislikes: dislikes,
    };

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post); // Log the response to verify it's correct
        addPost(post);
        navigate("/"); // Call addPost with the response data
      })
      .catch((error) => {
        console.error("Error adding post:", error); // Handle any errors
      });
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlfor="userId" className="form-label">
            Enter your userId here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlfor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today?"
          />
        </div>

        <div className="mb-3">
          <label htmlfor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            rows="5"
            className="form-control"
            id="body"
            placeholder="Tell us more about it.."
          />
        </div>

        <div className="mb-3">
          <label htmlfor="reactions" className="form-label">
            Number of Likes
          </label>
          <input
            type="text"
            ref={likesElement}
            className="form-control"
            id="reactions"
            placeholder="How many people Liked to this post?"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="reactions" className="form-label">
            Number of dislikes
          </label>
          <input
            type="text"
            ref={dislikesElement}
            className="form-control"
            id="reactions"
            placeholder="How many people disliked to this post?"
          />
        </div>

        <div className="mb-3">
          <label htmlfor="tags" className="form-label">
            Enter your hastags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
