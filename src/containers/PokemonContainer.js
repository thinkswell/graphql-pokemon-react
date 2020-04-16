import React, { useState } from "react";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/getPokemon";
import { Query } from "react-apollo";

export default function PokemonContainer() {
  const [count, setCount] = useState(6);

  return (
    <React.Fragment>
      {" "}
      <label>
        Showing First{" "}
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          min={2}
          max={50}
        />{" "}
        Pokemons.
      </label>
      <div className="container">
        <Query query={GET_POKEMONS} variables={{ first: count }}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error ${error}`;
            return (
              <React.Fragment>
                {data.pokemons.map((pokemon) => (
                  <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
              </React.Fragment>
            );
          }}
        </Query>
      </div>
    </React.Fragment>
  );
}
