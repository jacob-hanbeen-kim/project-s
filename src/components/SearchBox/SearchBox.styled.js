import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

export const SearchIconContainer = styled.div`
    margin-right: 8px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 12px;
`

export const SearchIcon = styled(FaSearch)`
    text-rendering: optimizelegibility;
    color: rgb(112, 122, 131);
`