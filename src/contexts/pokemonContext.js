import React, { useReducer, createContext } from "react";

export const PokemonContext = createContext();

const initialState = {
    pokemons: [],
    pokemonObj: null,
    loading: false,
    error: null,
    pokemonOpt: null
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_POKEMON":
        return {
          pokemons: [...state.pokemons, action.payload]
        };
      case "DEL_POKEMON":
        return {
          pokemons: state.pokemons.filter(
            pokemon => pokemon.id !== action.payload
          )
        };
      case "GET_POKEMON_LIST":
        return {
          pokemons: action.payload,
          loading: true
        };
      case "UPDATE_POKEMON":
        return {
          loading: false
        };
      case "NEW_POKEMON":
        return {...state, 
            pokemonOpt: action.payload.operation,
            pokemonObj: action.payload.pokemon
        };
      case "UPDATE_POKEMON_LIST":
        return {...state, 
          pokemonOpt: action.payload.operation,
          pokemonObj: action.payload.pokemon
        };
      default:
        throw new Error();
    }
  };

export const PokemonContextProvider = props => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={[dispatch, state]}>
      {props.children}
    </PokemonContext.Provider>
  );
};