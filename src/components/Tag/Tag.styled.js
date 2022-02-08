import styled from 'styled-components';


export const Container = styled.div`
    margin: 0px;
    padding: 0px;
    border: 0px;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    z-index: 2;
    border: none;
    border-radius: 12px;
    
    /* width: 150px; */
    /* width: 100%; */
    line-height: 22px;
    
    overflow: visible;
    color: rgb(236, 91, 91);
    background: rgba(226, 108, 108, 0.14);
    transition: all 0.12s ease-in-out 0s;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
    /* padding: 5px 10px 5px 5px; */
    padding: 2px 20px;
    margin: 0px;

    text-align: center;
    text-transform: none;
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    font-size: 13px;
`

export const Text = styled.span`
    flex-grow: 1;
`

export const Icon = styled.div`
    width: 16px;
    height: 16px;
    max-height: 100%;
    max-width: 100%;
    margin-right: 4px;
`