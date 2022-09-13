import React, { useContext, useState, useEffect } from 'react';
import LabelWrapper from './wrappers/LabelWrapper';
import InputWrapper from './wrappers/InputWrapper';
import { PokemonContext } from '../contexts/pokemonContext';
import { addPokemonService, getPokemonListService, updatePokemonService } from '../services/pokemonServices';

const Form = () => {
    const [dispatch, state] = useContext(PokemonContext);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImageUrl, setPokemonImageUrl] = useState('');
    const [pokemonAttack, setPokemonAttack] = useState(0);
    const [pokemonDefense, setPokemonDefense] = useState(0);

    useEffect(() => {
        if(state.pokemonObj) {
            setPokemonName(state.pokemonObj.name);
            setPokemonImageUrl(state.pokemonObj.image);
            setPokemonAttack(state.pokemonObj.attack);
            setPokemonDefense(state.pokemonObj.defense);
        } else {
            setPokemonName('');
            setPokemonImageUrl('');
            setPokemonAttack(0);
            setPokemonDefense(0);
        }
    }, [state.pokemonObj]);

    const handlePokemonName = ({target}) => {
        setPokemonName(target.value);
    };

    const handlePokemonImageUrl = ({target}) => {
        setPokemonImageUrl(target.value);
    };

    const handlePokemonAttack = ({target}) => {
        setPokemonAttack(parseInt(target.value));
    };

    const handlePokemonDefense = ({target}) => {
        setPokemonDefense(parseInt(target.value));
    };
    
    const handleAddPokemon = async (event) => {
        event.preventDefault();

        const pokemonBodyObj = {
            name: pokemonName,
            image: pokemonImageUrl,
            attack: pokemonAttack,
            defense: pokemonDefense,
            hp: 200,
            type: "normal",
            idAuthor: 1
        };

        switch(state.pokemonOpt) {
            case 'add':
                const optionsPost = {
                    method: 'POST', 
                    body: JSON.stringify(pokemonBodyObj), 
                    headers: { 'Content-Type': 'application/json' } 
                }

                await addPokemonService(optionsPost);
                break;
            case 'update': 
                const optionsPut = {
                    method: 'PUT', 
                    body: JSON.stringify(pokemonBodyObj), 
                    headers: { 'Content-Type': 'application/json' } 
                }

                await updatePokemonService(state.pokemonObj.id, optionsPut);
                break;
            default: 
                console.log('test');
        }

        const list = await getPokemonListService();

        dispatch({
            type: 'GET_POKEMON_LIST',
            payload: list
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleAddPokemon}>
                <fieldset disabled={!state.pokemonOpt} className='grid' data-testid='fieldset-disabled'>
                    <h4 className='grid-header'>Nuevo Pokemon</h4>
                    <div className='grid-1'>
                        <div className='box-1'>
                            <LabelWrapper className='label-name'>Nombre: </LabelWrapper>
                            <InputWrapper className='input-name' type='text' name='pokemonName' required value={pokemonName} onChange={handlePokemonName}></InputWrapper>
                        </div>
                        <div className='box-2'>
                            <LabelWrapper className='label-img'>Imagen: </LabelWrapper>
                            <InputWrapper className='input-img' type='text' placeholder='url' name='pokemonImageUrl' required value={pokemonImageUrl} onChange={handlePokemonImageUrl}></InputWrapper>
                        </div>
                    </div>
                    <div className='grid-2'>
                        <div className='box-3'>
                            <LabelWrapper className='label-attack'>Ataque: </LabelWrapper>
                            <LabelWrapper className='label-min'>0</LabelWrapper>
                            <InputWrapper className='input-attack' type='range' min='0' max='100' name='pokemonAttack' value={pokemonAttack} onChange={handlePokemonAttack}/>
                            <LabelWrapper className='label-max'>100</LabelWrapper>
                        </div>
                        <div className='box-4'>
                            <LabelWrapper className='label-defense'>Defensa: </LabelWrapper>
                            <LabelWrapper className='label-min'>0</LabelWrapper>
                            <InputWrapper className='input-defense' type='range' min='0' max='100' name='pokemonDefense' value={pokemonDefense} onChange={handlePokemonDefense}/>
                            <LabelWrapper className='label-max'>100</LabelWrapper>
                        </div>
                    </div>
                    <div className='grid-actions'>
                        <InputWrapper 
                            className='btn-submit' 
                            type='submit' 
                            value='Guardar' 
                            disabled={pokemonName === '' || pokemonImageUrl === '' ? true : false}
                            style={{ opacity: pokemonName === '' || pokemonImageUrl === '' ? '0.5' : '1'}}
                        />
                        <InputWrapper 
                            className='btn-cancel' 
                            type='button' 
                            value='Cancelar'
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Form;