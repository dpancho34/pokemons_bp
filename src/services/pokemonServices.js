export const addPokemonService = async (options) => {
    const res = await fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1', options);
    const json = await res.json();

    return json;
};

export const getPokemonListService = async () => {
    const res = await fetch('https://bp-pokemons.herokuapp.com/?idAuthor=1');
    const json = await res.json();
    
    return json;
};

export const updatePokemonService = async (id, options) => {
    const res = await fetch(`https://bp-pokemons.herokuapp.com/${id}`, options);
    const json = await res.json();
    
    return json;
};

export const deletePokemonService = async (id, options) => {
    const res = await fetch(`https://bp-pokemons.herokuapp.com/${id}`, options);
    const json = await res.json();
    
    return json;
};