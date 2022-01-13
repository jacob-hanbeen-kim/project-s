import SocialIcons from './SocialIcons';
import { Container } from '../styles/Container.styled';
import { Flex } from '../styles/Flex.styled';
import { StyledFooter } from '../styles/Footer.styled';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo192.svg" alt="" />

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
