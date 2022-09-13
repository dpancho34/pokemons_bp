import React from 'react';
import ButtonWrapper from '../wrappers/ButtonWrapper';
import LabelWrapper from '../wrappers/LabelWrapper';

const AddPokemonComponent = ({onClick}) => {
    return (
        <div className='search-button'>
            <ButtonWrapper data-testid='button-to-form' onClick={onClick} className='button'>
                <div style={{display: 'flex'}}>
                    <LabelWrapper className="icon">+</LabelWrapper>
                    <LabelWrapper className='text-btn'>Nuevo</LabelWrapper>
                </div>
            </ButtonWrapper>
        </div>
    );
};

export default AddPokemonComponent;