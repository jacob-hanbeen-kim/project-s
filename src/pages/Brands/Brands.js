import {
    BrandsContainer,
} from './Brands.styled';

import { Card, Carousel } from '../../components';

const Brand = () => {
    return (
        <BrandsContainer>
            <Carousel children={
                [
                    <Card
                        image="./images/uniform.jpg"
                        title="Uniform Logo"
                        details="add custom logo to our team's uniform"
                        buttonTxt="Learn More"
                    />,
                    <Card
                        image="./images/uniform.jpg"
                        title="Uniform Logo"
                        details="add custom logo to our team's uniform"
                        buttonTxt="Learn More"
                    />,
                    <Card
                        image="./images/uniform.jpg"
                        title="Uniform Logo"
                        details="add custom logo to our team's uniform"
                        buttonTxt="Learn More"
                    />
                ]
            }>
            </Carousel>
        </BrandsContainer>
    )
}

export default Brand
