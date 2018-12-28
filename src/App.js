import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';

class App extends Component {
  state = {
    active: 'profile',
  }

  changeTab = (tabName) => {
    this.setState({
      active: tabName,
    });
  }

  render() {
    const { active } = this.state;
    return (
      <div className="container">
        <Navbar active={active} changeTab={this.changeTab} />
        <Content active={active} />
      </div>
    );
  }
}

export default App;
