class App extends React.Component {
  render() {
    return (
      <div>
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny
          bangs={4}
          img="https://google.com/logo.png"
        />
        {/* <Hello
          to="Britney"
          from="Adele"
          num={3}
          data={[1, 2, 3, 4, 5]}
          isFunny
          bangs={10}
        /> */}
        {/* <Hello to="Cher" from="Sonny" /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
