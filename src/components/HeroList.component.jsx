import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
} from 'mdbreact';

import Hero from './Hero.component';

const HeroList = ({ heroes, setHeroes }) => {
    return (
        <MDBContainer className='w-50 text-center'>
            <ul>
                {
                    heroes.map((data) => {
                        return(
                            <Hero 
                                key={data.id} 
                                name={data.name}
                                hero={data}
                                heroes={heroes}
                                setHeroes={setHeroes}
                            />
                        )
                    })
                }
            </ul>
        </MDBContainer>
    )
}

export default HeroList
