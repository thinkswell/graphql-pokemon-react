import React from "react";

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="card">
      <div className="name">{pokemon.name}</div>
      <div className="max">
        <div className="max-p">maxHP: {pokemon.maxHP}</div>
        <div className="max-p">maxCP: {pokemon.maxCP}</div>
      </div>
      <div className="imageBox">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="special">
        <div className="head">Special Attacks</div>
        <div className="attacks">
          {pokemon.attacks.special.map((attack) => (
            <div className="attack">{attack.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
