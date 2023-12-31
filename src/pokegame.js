import React, { Component } from "react";
import Pokedex from "./pokedex";
import charmendar from "./images/charmendar.jpeg";
import squirtle from "./images/squirtle.jpeg";
import eevee from "./images/eevee.jpeg";
import jigglypuff from "./images/jigglypuff.jpeg";
import gengar from "./images/gengar.jpeg";
import metapod from "./images/metapod.jpeg";
import butterfree from "./images/butterfree.jpeg";
import pikachu from "./images/pikachu.png";

class Pokegame extends Component {
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
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIndx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIndx, 1)[0];
      hand1.push(randPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}
export default Pokegame;
