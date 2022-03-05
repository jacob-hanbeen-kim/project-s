import styled from 'styled-components'
import { FaChevronDown } from 'react-icons/fa';

export const LogoContainer = styled.div`
    width: 100px;
    height: 100px;
    margin: 20px;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 100vh;
    max-width: 80vw;

    z-index: 1;
`


export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MiddleSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    justify-content: center;
    align-items: center;

    text-align: center;

    & h2 {
        @media screen and (max-width: ${({ theme }) => theme.screen.sizeL}){
            font-size: ${({ theme }) => theme.fontSizes.use('display3')};
            line-height: ${({ theme }) => theme.lineHeights.use('display3')};
        }

        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
            font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
            line-height: ${({ theme }) => theme.lineHeights.use('heading1')};
        }
    }

    & h1 {
        
        @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
            font-size: ${({ theme }) => theme.fontSizes.use('standard')};
            line-height: ${({ theme }) => theme.lineHeights.use('standard')};
        }
    }
`

export const CallToAction = styled.div`
    max-width: 50vw;

    & * {
        white-space: nowrap;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SneakPeakContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & * {
        color: ${({ theme }) => theme.colors.onPrimary};
        white-space: nowrap;
    }

    &:hover {
        cursor: pointer;

        * {
            color: ${({ theme }) => theme.colors.accent};
        }
    }
`

export const DownIcon = styled(FaChevronDown)`
    font-size: ${({ theme }) => theme.fontSizes.use('heading1')};
    color: ${({ theme }) => theme.colors.onPrimary};
`