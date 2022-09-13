import React from 'react';
import InputWrapper from '../wrappers/InputWrapper';

const SearchComponent = ({ handleWordSearch }) => {
    return (
        <div className='search-container'>
            <div className='label-list'>
                Listado de Pokemon
                <InputWrapper type='text' placeholder='Buscar' className='search' onChange={handleWordSearch}/>
            </div>            
        </div>
    );
};

export default SearchComponent;