function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your number is: {num}</h1>
        <p>{num === 7 ? "Congrats!" : "unlucky"}</p>
        {num === 7 ? (
          <img src="https://media2.giphy.com/media/U6vdotF6Hga2zdAtqf/giphy.gif?cid=ecf05e4781fdf1d953266ec092db2e65279ded7003f39cdb&rid=giphy.gif" />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
