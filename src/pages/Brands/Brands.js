import {
    BrandsContainer,
} from './Brands.styled';

import Carousel from '../../components/Carousel';
import Card2 from '../../components/Card2';

const Brand = () => {
    return (
        <BrandsContainer>
            <Carousel children={
                [
                    <Card2
                        image="./images/uniform.jpg"
                        title="Uniform Logo"
                        details="add custom logo to our team's uniform"
                        buttonTxt="Learn More"
                    />,
                    <Card2
                        image="./images/uniform.jpg"
                        title="Uniform Logo"
                        details="add custom logo to our team's uniform"
                        buttonTxt="Learn More"
                    />,
                    <Card2
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
