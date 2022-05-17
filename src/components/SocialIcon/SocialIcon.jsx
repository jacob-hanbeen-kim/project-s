import {
    Container,
    Wrapper,
    Icon
} from './SocialIcon.styled';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialIcon = ({ media }) => {
    const getIcon = () => {
        switch (media) {
            case 'facebook': return <FaFacebookF />;
            case 'instagram': return <FaInstagram />;
            case 'twitter': return <FaTwitter />;
            case 'linkedin': return <FaLinkedinIn />;
            default: return;
        }
    }

    return (
        <Container>
            <Wrapper media={media}>
                <Icon>
                    {
                        getIcon()
                    }
                </Icon>
            </Wrapper>
        </Container>
    )
}

export default SocialIcon