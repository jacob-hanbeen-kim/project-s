import {
    ContractRequisitesSection
} from './Sponsor.styled'

import {
    TshirtDiv,
    TshirtImage,
    TshirtButtonContainer,
} from '../Profile/Profile.styled'

import { Container } from '../../../styles/Container.styled'
import { Button } from '../../../styles/Button.styled';
import Carousel from '../../../components/Carousel';


import content from '../../../content.js'
import Card from '../../../components/Card';
import Card2 from '../../../components/Card2';

const Sponsor = () => {
    return (
        <Container>
            <ContractRequisitesSection>
                {/* <Carousel child={
                    <>
                        <TshirtDiv>
                            <TshirtImage>
                                <img src={`./images/uniform.jpg`} alt="uniform" />
                            </TshirtImage>
                            <TshirtButtonContainer>
                                <Button>Learn More</Button>
                            </TshirtButtonContainer>
                        </TshirtDiv>
                        <TshirtDiv>
                            <TshirtImage>
                                <img src={`./images/uniform.jpg`} alt="uniform" />
                            </TshirtImage>
                            <TshirtButtonContainer>
                                <Button>Learn More</Button>
                            </TshirtButtonContainer>
                        </TshirtDiv>
                    </>
                } /> */}
                <h1>Sponsor Opportunities</h1>
                {content.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
                <Card2
                    layout='row'
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                />
                <Card2
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                />
                <Card2
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                    layout='row-reverse'
                />
                <Card2
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                    layout='column-reverse'
                />
            </ContractRequisitesSection>
        </Container>
    )
}

export default Sponsor
