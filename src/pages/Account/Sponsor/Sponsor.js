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

import content from '../../../content.js'
import { Card, Card2, Carousel } from '../../../components/';

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
                    <Card2 key={index} item={item} />
                ))}
                <Card
                    layout='row'
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                />
                <Card
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                />
                <Card
                    image="./images/uniform.jpg"
                    title="Uniform Logo"
                    details="add custom logo to our team's uniform"
                    buttonTxt="Learn More"
                    layout='row-reverse'
                />
                <Card
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
