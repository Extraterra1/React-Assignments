class Machine extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.s1 + this.props.s2 + this.props.s3}</p>
        <h4>
          {this.props.s1 === this.props.s2 && this.props.s1 === this.props.s3
            ? "You Win!"
            : "You Lose!"}
        </h4>
      </div>
    );
  }
}
