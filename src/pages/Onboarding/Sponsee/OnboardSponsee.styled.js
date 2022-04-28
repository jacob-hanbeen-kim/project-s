import styled from 'styled-components';
import { InputBox } from '../../../styles/InputBox.styled';
import { Button } from '../../../styles/Button.styled';

export const OnboardSponseeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleContainer = styled.div`
    display: flex;
    margin-left: 80px;
    margin-top: 50px;
`

export const SelectWrapper = styled.select`
    margin-left : 30px;
    margin-top: 20px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Header = styled.h2`
    
`

export const TitleDescription = styled.p`
    
`

export const FormContainer = styled.div`
    display : flex;
    margin-left: 100px;
    margin-top: 40px;
`

export const PageOneForm = styled.form`
    display: flex;
    width: 50%;
    flex-direction: column;
    height: 100%;
    /* margin-top: 80px */
`
export const CheckboxWrapper = styled.div`
    width: 40%;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 30px;
`

export const SponseeInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 30px;
`

export const FormInputLabel = styled.label`
    font-size: 14px;
`

export const FormInput = styled(InputBox)`
    margin-bottom: 10px
`

export const RadioButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

export const RadioButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
`

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
`

export const BackButton = styled(Button)`
    width: 10%;
    margin: 20px;
    background-color: #c4c4c4;
`

export const NextButton = styled(Button)`
    width: 10%;
    margin: 20px;
    background-color: #ae7acc;
`

export const OnboardingSponsorCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin: 50px 0px;
    margin-left: 60px;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
    }
`