import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 250px;
    min-height: 450px;
    
    text-align: center;

    background-color: ${({ theme }) => theme.colors.surface};
    border: none;
    border-radius: ${({ theme }) => theme.border.radius};

    margin: 0px 10px;
    padding: 30px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        width: 100%;
        min-height: 100px;
        margin: 10px 0px;
    }

`

export const ContentContainer = styled.div`
    margin-bottom: 10px;
`

export const Header = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.default};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.onSurface};
    margin: 0px;
`

export const PriceContainer = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0px;
    margin-top: 30px;
    margin-bottom: 15px;
`

export const Price = styled.h1`
    /* font-size: ${({ theme }) => theme.fontSizes.large}; */
    margin: 0px;
`

export const Monthly = styled.p`
    margin: 0px;
    font-size: ${({ theme }) => theme.fontSizes.small};
`

export const SubscriptionDetails = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    font-size: ${({ theme }) => theme.fontSizes.small};

    color: ${({ theme }) => theme.colors.onSurface};
    opacity: 0.5;
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    & > li {
        margin: 15px;
    };
`

export const BtnWrapper = styled.div`
    margin: 0px;
    margin-top: 20px;

    button {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

        &:disabled,
        &[disabled] {
            cursor: default;
            opacity: 0.5;

            &:hover {
                transform: scale(1.0);
            }
        }
    }
`