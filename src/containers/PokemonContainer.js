import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/getPokemon";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default function PokemonContainer() {
  return (
    <div className="container">
      <Query query={GET_POKEMONS} variables={{ first: 10 }}>
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
  );
}
