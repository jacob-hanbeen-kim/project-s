import styled from 'styled-components';
import { InputBox } from '../../../styles/InputBox.styled';
import { Button } from '../../../styles/Button.styled';

export const OnboardAgencyContainer = styled.div`
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

export const ProgressBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 150px;
    margin-right: 150px;
`

export const ProgressLine = styled.div`
    width: 200px;
    height: 13px;
    border-bottom: 1px solid #c4c4c4;
`

export const ProgressCurrent = styled.div`
    height: 25px;
    width: 25px;
    background-color: #ae7acc;
    border-radius: 50%;
    display: inline-block;
`

export const ProgressBarCircle = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
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
    margin-left: 40px;
`

export const AgencyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 30px;
`

export const SendEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 30px;
`

export const SendEmailButton = styled(Button)`
    display: flex;
    width:10%;
    height:10%;
    justify-content: center;
    background-color: #b3b3b3;
    margin-left: 5px;
`

export const SendEmailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
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

export const FormInputLabel = styled.label`
    font-size: 14px;
`

export const Label = styled.label`
    margin-bottom: 30px;
`

export const RadioLabel = styled.label`
    margin-left: 5px;
    font-size: 14px;
`

export const FormInput = styled(InputBox)`
    margin-bottom: 10px;
    width: 80%;
`

export const SelectOption = styled.select`
    border: 1px solid #ccc;
`

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 50px;
`

export const BackButton = styled(Button)`
    width: 13%;
    margin: 20px;
    background-color: #c4c4c4;
`

export const NextButton = styled(Button)`
    width: 13%;
    margin: 20px;
    background-color: #ae7acc;
`

export const OnboardingAgencyCardContainer = styled.div`
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