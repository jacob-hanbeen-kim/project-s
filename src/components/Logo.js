import {
    LogoContainer,
    LogoImageContainer,
    BrandNameContainer
} from '../styles/Logo.styled';

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImageContainer>
                <img src='./images/logo192.svg' alt='logo' />
            </LogoImageContainer>
            <BrandNameContainer>
                <img src='./images/brand_name.svg' alt='brand-name' />
            </BrandNameContainer>
        </LogoContainer>
    )
}

export default Logo
