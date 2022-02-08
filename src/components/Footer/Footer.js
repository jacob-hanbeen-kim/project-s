import { SocialIcons } from '../';
import { Container } from '../../styles/Container.styled';
import { Flex } from '../../styles/Flex.styled';
import { Img, ImgWrap } from '../InfoSection/InfoSection.styled';
import { StyledFooter } from './Footer.styled';

const Footer = ({ isDark }) => {
    return (
        <StyledFooter>
            <Container>
                <ImgWrap>
                    {isDark ?
                        <Img src={process.env.PUBLIC_URL + '/images/logo192_dark.svg'} alt='logo' /> :
                        <Img src={process.env.PUBLIC_URL + '/images/logo192.svg'} alt='logo' />
                    }
                </ImgWrap>

                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li>+1-123-345-7890</li>
                        <li>example@projects.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>

                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p>&copy; 2022 Project S. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer
