import styled from 'styled-components';
import { Button } from '../../../styles/Button.styled'
import { InputBox } from '../../../styles/InputBox.styled';

export const PackageSponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.div`
    text-align: center;
    margin: 10px 60px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 16px;
    border-bottom-style: solid;
    border-color: ${({ theme }) => theme.colors.border};
`

export const NewItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px 60px;
    padding-left: 60px;
    padding-right: 60px;
    font-size: 16px;
`

export const NewItemWrapper = styled.div`
    display: flex;
    flex-direction: row;  

`

export const SubmitButton = styled(Button)`
    margin: 10px;
`

export const CancelButton = styled(Button)`
    margin: 10px;
    background-color: #b3b3b3;
`

export const FormButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`

export const AddItemButton = styled(Button)`
    width: 25%;
`

export const AddItemForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`

export const FormNewItems = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    text-align: left;
    width: 70%;
`

export const NewItemTextArea = styled.textarea`
    border: 1px solid #ccc;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
`

export const AddNewItemInput = styled(InputBox)`
    width: 100%;
    
`

export const RemoveButton = styled(Button)`
    padding: 4px;
    height: 80%;
    background-color: #b3b3b3;
    margin-right: 5px;
    
    &:hover {
        background-color: red;
    }
`

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    text-align:center
`

export const AddNewItemLabel = styled.label`
    font-size: 14px;
    margin: 5px;
`

export const PriceInput = styled(InputBox)`
    border-radius: 0px 4px 4px 0px;
`

export const PricePrefix = styled.span`
    padding: 11px 12px;
    padding-bottom: 12px;
    font-size: 14px;
    font-weight: 400;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px 0px 0px 4px;
`

export const AddDescriptionButton = styled(Button)`
    display: flex;
    text-align: center;
    justify-content: center;
    background-color: #b3b3b3;
`

export const PackageList = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left
`

export const NoPackageWrapper = styled.div`
    display: flex;
`

export const PackageWrapper = styled.div`
    display: flex;
`

export const ExpandButton = styled(Button)`

`

export const SaveDescriptionButton = styled(Button)`
    display:flex;
    text-align: center;
    width: 10%;
    justify-content: center;
`

export const DescriptionButtonWrapper = styled.div`
    display:flex;
    flex-direction: row;
`

export const PacakgeDescription = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 10px;
    background-color: #ededed;
    border-radius: 4px 4px 4px 4px;
    overflow: scroll;
    justify-content: space-between;
    align-items: center;
`