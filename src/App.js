import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';

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
        <header>
          <Navbar active={active} changeTab={this.changeTab} />
        </header>
        <Main active={active} />
      </div>
    );
  }
}

export default App;
