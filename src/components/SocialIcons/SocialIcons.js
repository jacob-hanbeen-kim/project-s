import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './SocialIcons.styled';

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="htts://twitter.com">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="htts://facebook.com">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="htts://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}

export default SocialIcons
