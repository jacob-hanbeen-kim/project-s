import { SocialIcons } from '../';
import {
    StyledFooter,
    Container,
    ImgWrap,
    Img
} from './Footer.styled';

const Footer = ({ isDark }) => {
    return (
        <StyledFooter>
            <Container>
                <ImgWrap>
                    {isDark ?
                        <Img src={process.env.PUBLIC_URL + '/images/brand_name_dark.png'} alt='logo' /> :
                        <Img src={process.env.PUBLIC_URL + '/images/brand_name_dark.png'} alt='logo' />
                    }
                </ImgWrap>
                {/* <Flex>
                    <SocialIcons />
                </Flex> */}
                <p>&copy; 2022 Defiact All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer
