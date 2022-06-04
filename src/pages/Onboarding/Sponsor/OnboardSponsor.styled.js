import styled from 'styled-components';
import { InputBox } from '../../../styles/InputBox.styled';
import { Button } from '../../../styles/Button.styled';

export const OnboardSponsorContainer = styled.div`
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
export const EnterpriseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 30px;
`

export const SponsorInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-bottom: 30px;
`

export const SportsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AddSportButton = styled(Button)`
    display: flex;
    width:10%;
    height:10%;
    justify-content: center;
    background-color: #b3b3b3;
    margin-left: 5px;
`

export const SportsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FormInputLabel = styled.label`
    font-size: 14px;
`

export const Label = styled.label`
    margin-bottom: 30px;
`

export const CheckboxWrapper = styled.div`
    width: 40%;
    flex-direction: row;
    padding: 10px;
    margin-left: 30px;
    margin-bottom: 25px;
`

export const FormInput = styled(InputBox)`
    margin-bottom: 10px;
    width: 80%;
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
    text-align: center;
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