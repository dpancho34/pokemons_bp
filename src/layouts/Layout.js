import React, { useEffect, useContext, useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Form from '../components/Form';
import { getPokemonListService } from '../services/pokemonServices';
import { PokemonContext } from '../contexts/pokemonContext';

export const Layout = () => {
    const [dispatch] = useContext(PokemonContext);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await getPokemonListApi();

            dispatch({
                type: 'GET_POKEMON_LIST',
                payload: response
            });   
        }

        fetchMyAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
      };

    const getPokemonListApi = async () => {
        return await getPokemonListService();
    };
    
    return (
        <div className='layout' role="layout-data">
            <Header handleSearch={handleSearch}/>
            <Table filter={search}/>
            <Form />
        </div>
    );
};