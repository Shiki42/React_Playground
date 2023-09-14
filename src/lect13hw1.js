import "./styles.css";

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[]
    };
  }

  
  handleAdd = (e) => {
    if (e.keyCode === 13) {
      this.setState(prevState => (prevState.todos.push({s:e.target.value,do:false})));
    }

  };

  handleCheck = (e) => {
    console.log(e.target.getAttribute('label'))
    this.setState(prevState => {
      prevState.todos[e.target.getAttribute('label')].s = 'fyck';
      
      prevState.todos[e.target.getAttribute('label')].do = !prevState.todos[e.target.getAttribute('label')].do;});
      this.forceUpdate();
  }

  checkAll = () => {
    this.setState(prevState => (prevState.todos.map((todo)=> todo.do = true)));
  }

  clearChecked = () => {
    this.setState(prevState => (prevState.todos = prevState.todos.filter((e)=>{return !e.do})));
  }
  render() {
    return (
      <div>
        <input onKeyUp = {this.handleAdd}/>
      <div>
        <p>Remaining: {this.state.todos.length}</p>
      </div>
      <button onClick={this.checkAll}>Check all</button>
      <button onClick={this.clearChecked}>Clear completed</button>
      <ul>
        {this.state.todos.map((todo,index) => <li><input type="checkbox" onChange= {this.handleCheck} label={index} checked={todo.do}/>{todo.s}</li>)}
      </ul>
      </div>
    );
  }
}

export default App;