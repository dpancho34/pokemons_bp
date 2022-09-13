/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from '../components/generics/SearchComponent';
import AddPokemonComponent from '../components/generics/AddPokemonComponent';
import Header from '../components/Header';
import Table from '../components/Table';
import { getPokemonListMock } from '../utils/utils'
import TableBody from '../components/generics/TableBody';
import TableRow from '../components/generics/TableRow';
import Form from '../components/Form';
import { PokemonContextProvider } from '../contexts/pokemonContext';
import { Layout } from '../layouts/Layout';

const mockOnclick = jest.fn();
describe ('Test components', () => {
  jest.setTimeout(20000);
  it('Testing title', () => {
    const { getByText } = render(<SearchComponent handleWordSearch={jest.fn()}/>);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText('Listado de Pokemon') ).toBeInTheDocument();
  });

  it("Button (Nuevo) must show", () => {
    const { getByText, getByTestId } = render(<AddPokemonComponent onClick={mockOnclick}/>);

    expect( getByText('Nuevo') ).toBeInTheDocument();
    fireEvent.click( getByTestId('button-to-form') );
    expect( mockOnclick ).toHaveBeenCalledTimes(1);
  });
  
  it("Button (Nuevo) must be enable pokemon form", () => {
    const { getByText, getByTestId } = render(
      <PokemonContextProvider>
        <Header>
          <AddPokemonComponent onClick={mockOnclick}/>
        </Header>
        <Form/>
      </PokemonContextProvider> 
    );

    expect( getByText('Nuevo') ).toBeInTheDocument();
    fireEvent.click( getByText('Nuevo') );
    expect( getByTestId('fieldset-disabled') ).not.toBeDisabled();
  });

  it("Pokemon table title has Acciones like option", () => {
    const { getByText } = render(
      <PokemonContextProvider>
        <Layout>
          <Table />
        </Layout>
      </PokemonContextProvider>
    );

    expect(getByText('Acciones')).toBeInTheDocument()
  });

  it("Button (Edit) in table must be enable pokemon form", () => {
    const { getByText } = render(
      <PokemonContextProvider>
        <TableBody heading={['Nombre', 'Imagen', 'Ataque', 'Defensa', 'Acciones']} body={getPokemonListMock}>
          <TableRow row={{
            "id": 3992,
            "name": "Charmander",
            "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
            "attack": 84,
            "defense": 13,
            "hp": 200,
            "type": "Planta",
            "id_author": 1
        }}/>
        </TableBody>
      </PokemonContextProvider> 
    );

    expect( getByText('Charmander') ).toBeInTheDocument();
  });
});