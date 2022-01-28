import styled from 'styled-components';


export const AccountContainer = styled.div`
    margin: 0px;
    padding: 0px;
    border: 0px;
`

export const AccountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AccountButton = styled.button`
    z-index: 2;
    appearance: button;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    
    width: 150px;
    line-height: 22px;
    
    overflow: visible;
    color: rgb(140, 140, 140);
    background: rgba(0, 0, 0, 0.14);
    transition: all 0.12s ease-in-out 0s;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
    padding: 2px 10px 2px 5px;
    margin: 0px;

    text-align: center;
    text-transform: none;
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    font-size: 13px;
`

export const AccountNumber = styled.span`
    flex-grow: 1;
`

export const CryptoIcon = styled.img`
    width: 16px;
    height: 16px;
    max-height: 100%;
    max-width: 100%;
    margin-right: 4px;
`