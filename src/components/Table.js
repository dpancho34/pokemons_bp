import React, { useContext } from 'react';
import TableBody from './generics/TableBody';
import { PokemonContext } from '../contexts/pokemonContext';

const Table = ({ filter }) => {
    // eslint-disable-next-line no-unused-vars
    const [dispatch, state] = useContext(PokemonContext);

    var heading = ['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones'];

    var body = state.pokemons.map(val => {
        let aux = val;
        return {
            id: aux.id,
            name: aux.name,
            image: aux.image,
            attack: aux.attack,
            defense: aux.defense,
            actions: true
        }
    });
    
    const data = {
        nodes: body.filter((item) =>
          item.name.includes(filter) || 
          item.attack.toString().includes(filter) ||
          item.defense.toString().includes(filter)
        ),
    };

    return (
        <div className='table-container' data-testid='table-data'>
            {state.pokemons.length &&
                <TableBody heading={heading} body={filter === '' ? body : data.nodes}/>
            }
        </div>
    );
};

export default Table;