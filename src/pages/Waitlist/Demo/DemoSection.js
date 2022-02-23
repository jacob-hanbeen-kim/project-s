import { useState } from 'react'
import { Text } from '../../../components'
import {
    Container,
    DemoContainer
} from './DemoSection.styled'

import Init from './Init/Init';
// import Negotiate from './Negotiate/Negotiate';
import Negotiate from '../../Negotiate/Negotiate';
import Payment from './Payment/Payment';
import { Button } from '../../../styles/Button.styled';


const State = {
    INIT: 'INIT',
    NEGOTIATE: 'NEGOTIATE',
    ACCEPT: 'ACCEPT',
    PAYMENT: 'PAYMENT'
};


const DemoSection = () => {
    const [state, setState] = useState(State.INIT);
    const [offerInfo, setOfferInfo] = useState(null);

    const getScreen = () => {
        switch (state) {
            case State.INIT: return <Init setState={() => setState(State.NEGOTIATE)} setOfferInfo={setOfferInfo}></Init>
            case State.NEGOTIATE: return <Negotiate offer={offerInfo} setState={() => setState(State.PAYMENT)}></Negotiate>
            case State.PAYMENT: return <Payment setState={() => setState(State.INIT)}></Payment>
            default: return <div>Error<Button onClick={() => setState(State.INIT)}>Try Again</Button></div>
        }
    }

    return (
        <Container>
            <Text variant='h1'>Try Yourself</Text>
            <DemoContainer>
                {
                    getScreen()
                }
            </DemoContainer>
        </Container>
    )
}

export default DemoSection