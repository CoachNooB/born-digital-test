import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBIcon,
    MDBRow,
} from 'mdbreact';

const Hero = ({ name, hero, heroes, setHeroes }) => {

    const removeHero = () => {
        let filterHero = heroes.filter((el) => el.id !== hero.id)
        setHeroes(filterHero)
    }

    return (
        <MDBContainer className='w-25'>
            <MDBRow>
            <li className='text-center lead'> {name} </li>
            <Link to='' onClick={removeHero} ><MDBIcon className='ml-2 mt-2 red-text' icon='times' /></Link>
            </MDBRow>
        </MDBContainer>
    )
}

export default Hero
