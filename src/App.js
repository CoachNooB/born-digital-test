import React, { useState } from 'react';
import {
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router} from 'react-router-dom';

import Form from './components/Form.component';
import HeroList from './components/HeroList.component';

function App() {

  const [heroes, setHeroes] = useState([])
  const [input, setInput] = useState('')

  return (
    <MDBContainer className='text-center pt-5 mt-5'>
      <h1>Assemble your Team</h1>
      <hr />
      <p className='lead'>Make a Group consist of 3 People</p>
      <Router>
        <HeroList heroes={heroes} setHeroes={setHeroes} />
        <Form input={input} setInput={setInput} heroes={heroes} setHeroes={setHeroes} />
      </Router>
    </MDBContainer>
  );
}

export default App;
