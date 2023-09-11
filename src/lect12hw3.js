import "./styles.css";

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick1 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  handleClick10 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 10 }));
  };

  handleClick100 = () => {
    this.setState(prevState => ({ counter: prevState.counter + 100 }));
  };

  render() {
    return (
      <div>
      <div>
        <p>counter: {this.state.counter}</p>
      </div>
      <button onClick = {this.handleClick1}> +1 </button>
      <button onClick = {this.handleClick10}> +10 </button>
      <button onClick = {this.handleClick100}> +100 </button>
      </div>
    );
  }
}

export default App;