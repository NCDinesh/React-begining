function Hello() {
  let msgno = 505
  let fullname = () => {
    return 'Dinesh Nepal';
  }

  let appre = "Thank You!";
  return <h3> Message NO: {msgno} Hello Everyone! This is {fullname()}. {appre} </h3>
}

export default Hello;