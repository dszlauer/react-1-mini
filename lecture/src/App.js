import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import ClassComponent from "./ClassComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }
  updatePicture(value) {
    this.setState({
      picture: value //updates picture in object when button clicked
    });
  }
  // DO NOT DO THIS: this.state.name(update directly with this.sate), it mutates the object. Do with this.setSate, which will run render and update object.
  updateName(value) {
    this.setState({
      name: value //updates name in object when button clicked
    });
  }
  addFriend() {
    const { name, picture, friends } = this.state;
    let newFriends = friends.slice(); // Updates object with friends values
    newFriends.push({ name, picture });
    this.setState({
      name: "",
      picture: "",
      friends: newFriends
    });
  }
  render() {
    const { name, picture, friends } = this.state; // destructured values, so we don't have to type out this.state below.

    const mapFriends = friends.map(friend => {
      // For each friends map, through the array
      return (
        <div
          key={friend.name}
          style={friend.name === "Daniel" ? { background: "red" } : null}>
          <span>{friend.name}</span>
          <img src={friend.picture} alt="" />
        </div>
      );
    });
    return (
      <div
        // this onKeyPress watches for Enter button to be pressed and executes addFriends()
        onKeyPress={e => {
          if (e.key === "Enter") {
            this.addFriend();
          }
        }}>
        <label htmlFor="Picture">Picture: </label>
        {/* onChange, event gets passed to function, function accesses the method through this.updatePicture, function is invoked with (), and event(clicked button), target(input field), value is passed to the method => updatePicture */}
        {/* second 'value' is added at the end of the function to clear the fields when button is pressed and information is passed */}
        <input
          id="Picture"
          onChange={e => this.updatePicture(e.target.value)}
          value={picture}
        />

        <label htmlFor="Name">Name: </label>
        <input
          id="Name"
          onChange={e => this.updateName(e.target.value)}
          value={name}
        />

        <button onClick={() => this.addFriend()}>Add Friend</button>
        {/* putting in mapped friends */}
        {mapFriends}
        <MyComponent />
        <ClassComponent />
      </div>
    );
  }
}

export default App;
