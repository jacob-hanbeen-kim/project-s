import PropTypes from 'prop-types'
import { StyledHeader, Nav, Logo, Image } from './Header.styled'
import { Button } from '../button/Button.styled';
import { Flex } from '../../styles/Flex.styled'
import { Container } from '../../styles/Container.styled'

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo_text.svg' alt='' />
                    <Button>Sign In</Button>
                </Nav>

                <Flex>
                    <div>
                        <h1>
                            Project S
                        </h1>

                        <p>
                            Laenofi aoefaiom ksnviok fod  asfoe kfafoef kmd af oa
                            asdfo feaklf as. aewofm dkla faoaid
                            adfonai efoawkf doai f.
                            asnfoawiejfo jaiosf oaefmo kamdo faief
                        </p>

                        <Button bg='#ff0099' color='#fff'>Get Started For Free</Button>
                    </div>

                    <Image src='./images/logo192_dark.svg' alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

Header.propTypes = {

}

export default Header
