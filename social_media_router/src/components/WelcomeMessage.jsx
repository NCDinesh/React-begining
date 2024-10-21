const WelcomeMessage = ({ OnGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts</h1>
      <button type="button" onClick={OnGetPostsClick} class="btn btn-primary">
        Get Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
