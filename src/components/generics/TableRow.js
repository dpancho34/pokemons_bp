import React, { useContext } from 'react';
import { PokemonContext } from '../../contexts/pokemonContext';
import { deletePokemonService, getPokemonListService } from '../../services/pokemonServices';

const TableRow = ({row}) => {
    const [dispatch, state] = useContext(PokemonContext);

    const handleStatePokemonObj = (id) => {
        if(state.pokemons.length > 0) {
            let pokemonFiltered = state.pokemons.find(val => val.id === id);

            dispatch({
                type: 'UPDATE_POKEMON_LIST',
                payload: {
                    operation: 'update',
                    pokemon: pokemonFiltered
                }
            });
        }
    };

    const handleDeletePokemon = async (id) => {
        const optionsDelete = {
            method: 'DELETE', 
        }
        await deletePokemonService(id, optionsDelete);

        const list = await getPokemonListService();

        dispatch({
            type: 'GET_POKEMON_LIST',
            payload: list
        });
    };

    return (
        <>
            <tr>
                {Object.keys(row).map((value, i) => {
                    return <td key={i.toString()} style={{display: value === 'id' ? 'none' : null}}>
                    {value !== 'image' ?
                        row[value] :
                        <img src={row['image']} alt={'image'+i.toString()} width={25} height={25}/>
                    }
                    {value === 'actions' && value !== 'id' &&
                        <div className='action-icons'>
                            <img src={require('../../assets/edit.png')} alt='edit' width={20} height={20} onClick={() => handleStatePokemonObj(row['id'])} id='edit' data-testid='table-row'/>
                            <img src={require('../../assets/remove.png')} alt='remove' width={25} height={25} onClick={() => handleDeletePokemon(row['id'])}/>
                        </div>
                    }
                </td>
                })}
            </tr>
        </>
    );
};

export default TableRow;