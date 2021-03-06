import React from "react";
import "./App.css";
import PokemonContainer from "./containers/PokemonContainer";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

function App() {
  const client = new ApolloClient({
    // uri: "https://graphql-pokemon.now.sh",
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PokemonContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
