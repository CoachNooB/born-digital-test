import {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBInput,
} from 'mdbreact';
import { nanoid } from 'nanoid';

import './List.styles.scss'

//Components
import Assemble from './Modal.component';



const Form = ({ input, setInput, heroes, setHeroes }) => {

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const addHero = () => {
        if(input) {
            setHeroes([
                ...heroes, {id: nanoid(10) ,name: input}
            ])
            setInput('');
        } else {
            window.alert('Input Cannot be Empty')
        }
    }

    console.log(heroes)

    return (
        <MDBContainer className='w-50'>
            <MDBRow>
                <MDBCol>
                    <MDBInput
                        name='Name'
                        id='heroName'
                        type='text'
                        outline
                        label='Input name here ...'
                        value={input}
                        onChange={inputChange}
                        />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    {heroes.length < 3 ? 
                        <button type='reset' className='btn btn-primary' onClick={addHero} >Add Hero</button>
                    :
                        <Assemble />
                    }
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Form
