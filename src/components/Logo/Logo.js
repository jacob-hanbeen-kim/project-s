import {
    LogoContainer,
    LogoImageContainer,
    BrandNameContainer
} from './Logo.styled';

const Logo = ({ isDark }) => {
    return (
        <LogoContainer>
            <LogoImageContainer>
                {
                    isDark ?
                        <img src='images/logo192_dark.svg' alt='logo' /> :
                        <img src='images/logo192.svg' alt='logo' />
                }
            </LogoImageContainer>
            <BrandNameContainer>
                {
                    isDark ?
                        <img src='images/brand_name_dark.svg' alt='brand-name' /> :
                        <img src='images/brand_name.svg' alt='brand-name' />
                }
            </BrandNameContainer>
        </LogoContainer>
    )
}

export default Logo
