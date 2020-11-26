import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
} from 'mdbreact';

const Assemble = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <Link to='' className='btn btn-default' onClick={toggle}>Assemble</Link>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Congratulations !</MDBModalHeader>
                <MDBModalBody>
                    You've just assembled The Earth Greatest Defender
                </MDBModalBody>
                <MDBModalFooter>
                    <Link to='' className='btn btn-primary' onClick={toggle}>Close</Link>
                </MDBModalFooter>
            </MDBModal>
        </>
    )
}

export default Assemble
