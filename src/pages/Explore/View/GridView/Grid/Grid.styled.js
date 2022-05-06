import styled from 'styled-components'
import { FaUserAlt } from 'react-icons/fa';

const borderColor = '#D4D4D4';

export const Container = styled.div`
    padding: 0px 20px 20px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* background-color: red; */
    height: 260px;
    width: 260px;
    
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${borderColor};
    
    background-color: ${({ theme }) => theme.colors.background};
`

export const ProfilePhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 60%;
    /* background-color: blue; */

    border-top-left-radius: ${({ theme }) => theme.border.radius};
    border-top-right-radius: ${({ theme }) => theme.border.radius};

    border-bottom: 1px solid ${borderColor};
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40%;
    /* background-color: green; */

    justify-content: center;
    align-items: center;

    border-bottom-left-radius: ${({ theme }) => theme.border.radius};
    border-bottom-right-radius: ${({ theme }) => theme.border.radius};

    padding-left: 20px;
    padding-right: 10px;
`

export const ProfileImg = styled.div`

`

export const ProfileIcon = styled(FaUserAlt)`
    font-size: 120px;
    color: #8B8B9F;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: inherit;
`

export const Name = styled.div`
    
`

export const Category = styled.div`
    
`

export const Tag = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: inherit;

    font-size: 10px;
    color: #A4A4A4;
    margin: 5px 0px;
`

export const DetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: inherit;
`

export const Details = styled.div`
    font-size: 10px;

    & > p {
        margin: 5px 0px;
    }
`

export const SocialMedia = styled.div`
    

`