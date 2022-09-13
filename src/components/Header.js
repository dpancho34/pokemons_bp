import React, { useContext } from 'react';
import SearchComponent from './generics/SearchComponent';
import AddPokemonComponent from './generics/AddPokemonComponent';
import { PokemonContext } from '../contexts/pokemonContext';

const Header = ({ handleSearch }) => {
    // eslint-disable-next-line no-unused-vars
    const [dispatch] = useContext(PokemonContext);

    const handleNewPokemon = () => {
        dispatch({
            type: 'NEW_POKEMON',
            payload: {
                operation: 'add',
                pokemon: null
            }
        });
    }

    return (
        <div className='header-container'>
            <SearchComponent handleWordSearch={handleSearch}/>
            <AddPokemonComponent onClick={handleNewPokemon}/>
        </div>
    );
};

export default Header;