import React, { Component } from "react";
import Pokecard from "./pokecard";
import "./pokedex.css";
import charmendar from "./images/charmendar.jpeg";
import squirtle from "./images/squirtle.jpeg";
import eevee from "./images/eevee.jpeg";
import jigglypuff from "./images/jigglypuff.jpeg";
import gengar from "./images/gengar.jpeg";
import metapod from "./images/metapod.jpeg";
import butterfree from "./images/butterfree.jpeg";
import pikachu from "./images/pikachu.png";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      {
        id: 4,
        name: "Charmander",
        type: "fire",
        base_experience: 62,
        image: charmendar,
      },
      {
        id: 7,
        name: "Squirtle",
        type: "water",
        base_experience: 63,
        image: squirtle,
      },
      {
        id: 11,
        name: "Metapod",
        type: "bug",
        base_experience: 72,
        image: metapod,
      },
      {
        id: 12,
        name: "Butterfree",
        type: "flying",
        base_experience: 178,
        image: butterfree,
      },
      {
        id: 25,
        name: "Pikachu",
        type: "electric",
        base_experience: 112,
        image: pikachu,
      },
      {
        id: 39,
        name: "Jigglypuff",
        type: "normal",
        base_experience: 95,
        image: jigglypuff,
      },
      {
        id: 94,
        name: "Gengar",
        type: "poison",
        base_experience: 225,
        image: gengar,
      },
      {
        id: 133,
        name: "Eevee",
        type: "normal",
        base_experience: 65,
        image: eevee,
      },
    ],
  };
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning hand!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing hand!</h1>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <h3>Total experience: {this.props.exp}</h3>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              image={p.image}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
