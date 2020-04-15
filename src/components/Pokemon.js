import React from "react";

export default function Pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <div className="card">
      <div className="card__bar">
        <div className="card__bar--part">maxHP: {pokemon.maxHP}</div>
        <div className="card__bar--part">maxCP: {pokemon.maxCP}</div>
      </div>
      <div className="card__body">
        <img src={pokemon.image} alt={pokemon.name} className="card__img" />
      </div>
      <div className="card__bar">Special attacks</div>
      <div className="card__bar">
        {pokemon.attacks.special.map((attack) => (
          <div key={attack.name} className="attack">
            <div className="attack__info">{attack.name}</div>
            <div className="attack__info">{attack.damage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
