import "./styles.css";

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      trans:''
    };
  }
  
  transfer = (e) => {
    let _int = parseInt(e);
    let _pst = '';
    if (_int) {
        if ( _int % 10 === 1 ){
            _pst = 'st';
        }
        else if ( _int % 10 === 2 ) {
            _pst = 'nd';
        }
        else if ( _int % 10 === 3 ) {
            _pst = 'rd';
        }

        else{
            _pst = 'th';
        }
        
        return _int + _pst;
    }
    else {
        return e;
    }
  }

  handleClick = (e) => {
    this.setState(prevState => ({ text: e.target.value }));
    this.state.trans=this.transfer(e.target.value);
  };


  render() {
    return (
      <div>
      <input onChange = {this.handleClick} />
    <div>{this.state.trans}</div>
      </div>
    );
  }
}

export default App;