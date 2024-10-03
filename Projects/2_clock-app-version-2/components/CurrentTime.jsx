let CurrentTime = () => {
  let time = new Date();
  return (
    <p className="lead">
      The Current Time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
