import React, { Component } from "react";
import "./pokecard.css";

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <div>
          <div className="Pokecard-img">
            <img src={this.props.image} />
          </div>
          <div className="Pokecard-data">Type: {this.props.type}</div>
          <div className="Pokecard-data">Experience: {this.props.exp}</div>
        </div>
      </div>
    );
  }
}
export default Pokecard;
