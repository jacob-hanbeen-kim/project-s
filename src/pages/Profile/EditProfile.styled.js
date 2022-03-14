import styled from 'styled-components';

export const EditProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.div`
    text-align: center;
    margin: 10px 60px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 16px;
`
export const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileTextWrapper = styled.div`
    text-align: left;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 14px;
    border-top-style: solid;
    border-color: ${({ theme }) => theme.colors.border};
`

export const ProfileEditForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SubmitButton = styled.input`
    border-radius: ${({ theme }) => theme.border.radius};
    border: 1px solid ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    
    width: 50%;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;

    font-size: ${({ big }) => big ? '20px' : '16px'};
    font-weight: 700;

    background-color: ${props => props.invert ? props.theme.colors.invert : props.theme.colors.primary};
    color: ${props => props.invert ? props.theme.colors.onInvert : props.theme.colors.onPrimary};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        font-size: ${({ big }) => big ? '16px' : '14px'};
    }
`

export const ProfileEditWrapper = styled.div`
    
`

export const ProfileTextArea = styled.textarea`
    width:70%;
    margin-bottom: 10px;
`