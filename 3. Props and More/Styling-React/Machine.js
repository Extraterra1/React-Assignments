class Machine extends React.Component {
  render() {
    return (
      <div className="Machine">
        <p style={{ fontSize: "50px", backgroundColor: "purple" }}>
          {this.props.s1 + this.props.s2 + this.props.s3}
        </p>
        <h4
          className={
            this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3
              ? "win"
              : "lose"
          }
        >
          {this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3
            ? "You Win!"
            : "You Lose!"}
        </h4>
      </div>
    );
  }
}
