import { useRef, useState } from 'react';
import {
    Container,
    ContentContainer,
    Header,
    BtnWrapper,
    ImageContainer,
    ButtonItemsOff,
    ButtonItemsOn
} from './DealsCard.styled';

const DealsCard = ({
    option,
    image,
    onChange,
    onClick,
    values
}) => {

    const [deals, setDeals] = useState();
    const [active, setActive] = useState(false);
    

    const onPress = (e) => {
        e.preventDefault();
        if(active===false) {
            setActive(true);
            onChange({
                target: {
                    name: `${option}`,
                    value: false
                }
            })
        } else if (active===true){
            setActive(false);
            onChange({
                target: {
                    name: `${option}`,
                    value: true
                }
            })
        }
        // console.log(values)
    }

    return (
        <Container>
            <ContentContainer>
                <Header>{option}</Header>
            </ContentContainer>
            <ImageContainer>
                <img src={process.env.PUBLIC_URL + image} alt={option}/>
            </ImageContainer>
            <div>
                <BtnWrapper>
                    { active ?
                        <ButtonItemsOn onChange={onChange} onClick={onPress} value={option}>
                        Select
                        </ButtonItemsOn> :
                        <ButtonItemsOff onChange={onChange} onClick={onPress} value={option}>
                        Select
                        </ButtonItemsOff>
                    }
                </BtnWrapper>
            </div>
        </Container >
    )
}

export default DealsCard
