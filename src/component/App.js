import React, { useEffect } from 'react';
import './app.css';
import { Container } from '@material-ui/core';

import Steppercomponent from './Stepper/Steppercomponent'

const App = () => {

    return (
        <div>
            <Container>
                <Steppercomponent />

            </Container>
        </div >
    )
}

export default App
