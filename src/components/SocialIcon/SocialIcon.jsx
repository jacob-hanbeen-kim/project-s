import {
    Container,
    Wrapper,
    Icon
} from './SocialIcon.styled';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialIcon = ({ media, size, fontSize }) => {
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
        <Container size={size}>
            <Wrapper media={media}>
                <Icon fontSize={fontSize}>
                    {
                        getIcon()
                    }
                </Icon>
            </Wrapper>
        </Container>
    )
}

export default SocialIcon