import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gryffindor: 0,
      canAdd: true,
      canRemove: false
    };
  }

  // componentDidUpdate() {
    //this create an update loop and it poops its pants
    //the reason is because the function detects an update and then setState creates a new update which then the function again detects an update and continues to loop
    // this.setState({
    //   canAdd: this.state.gryffindor > 85 ? false : true,
    //   canRemove: this.state.gryffindor > -1 ? true : false
    // });
  // }


  hasChanged(newVal) {
    console.log(this.state);
    if(newVal > 85) {
      this.setState({canAdd: false});
    } else {
      this.setState({canAdd: true});
    }

    if(newVal > 0) {
      this.setState({canRemove: true});
    } else {
      this.setState({canRemove: false});
    }
    // this issue with this method is state may be updated asynchronously, you should not rely on their values for calculating the next state.
    // this.setState({
    //   canAdd: this.state.gryffindor > 85 ? false : true,
    //   canRemove: this.state.gryffindor > 0 ? true : false
    // });
  }

  gryffindorIncrement() {
    let newVal = this.state.gryffindor + 5;
    if(this.state.gryffindor < 90) {
      this.setState({gryffindor: newVal});
    }
    this.hasChanged(newVal);
  }

  gryffindorSubtract() {
    let newVal = this.state.gryffindor - 10;
    if(newVal < 0) {newVal = 0};
    if(this.state.gryffindor > 0) {
      this.setState({gryffindor: newVal})
    }
    this.hasChanged(newVal);
  }

  render() {
    console.log(this.state);
    const filler = {height: this.state.gryffindor + "%"};

    let addBtnText = "5 points to gryffindor!";
    if(!this.state.canAdd) {
      addBtnText = "Not this time Potter!";
    }
    let removeBtnText = "Gryffindor Loses 10 points!";
    if(!this.state.canRemove) {
      removeBtnText = "Pathetic efforts Potter!";
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://images.vexels.com/media/users/3/131092/isolated/preview/ab2a681d881eaad7725602ea9224c3ac-hourglass-outlined-cursor-by-vexels.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Gryffindor Class Hourglass</h1>
        </header>
        <button disabled={!this.state.canAdd} className="button" onClick={() => this.gryffindorIncrement()}>{addBtnText}</button>
        <button disabled={!this.state.canRemove} className="button" onClick={() => this.gryffindorSubtract()}>{removeBtnText}</button>
        <div className="hourglassContainer">
          <div className="hourglass"><img src="http://cdn.onlinewebfonts.com/svg/img_193573.png"/></div>
          <div className="filler" style={filler}></div>
        </div>
      </div>
    );
  }
}

export default App;
