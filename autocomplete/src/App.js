import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './AutoComplete';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr : ''
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchStr: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="wrapper">
          <input type="search" name="searchstr" onChange={this.handleSearch}/>
          <AutoComplete searchStr={this.state.searchStr}></AutoComplete>
        </div>
        
      </div>
    );
  }
}

export default App;
