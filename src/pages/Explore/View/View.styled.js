import styled, { css } from 'styled-components';
import { FaList, FaTh, FaSlidersH, FaTimes } from 'react-icons/fa';

export const Container = styled.div`
    padding: 20px 50px;
    background-color: ${({ theme }) => theme.colors.surface};
    height: 100%;
    /* width: vw; */
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 10px;
    margin-bottom: 30px;

    @media (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`

export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.screen.sizeL}) {
        margin-top: 20px;
    }
`

export const TabContainer = styled.div`
    
`

export const Tab = styled.a`
    /* color: ${({ theme }) => theme.colors.onSurface}; */
    /* opacity: ${({ isActive }) => isActive ? '1.0' : '0.75'}; */
    border-bottom: ${({ isActive, theme }) =>
        isActive ? `3px solid ${theme.colors.primary}` : 'none'
    };
    transition: border-bottom 0.2s ease-in; // fade in-out color change

    margin: 0px 0.5rem;
    padding: 5px 3px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ isActive, theme }) => !isActive && theme.colors.primary};
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.screen.sizeL}) {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
    }
`

export const ViewOptions = styled.div`
    margin-right: 10px;
    display: flex;
    flex-direction: row;
`

export const ViewOptionIconContainer = styled.div`
    margin: 0px 5px;
    cursor: pointer;
    opacity: ${({ isActive }) =>
        isActive ? '1.0' : '0.3'
    };
    transition: opacity 0.2s ease-in; // fade in-out opacity change
`

export const GridIcon = styled(FaTh)`
    
`

export const ListIcon = styled(FaList)`
    
`

export const SortOptions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 30px;
`

export const SortOptionItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({ reverseLayout }) => reverseLayout ? 'row-reverse' : 'row'};
    
    cursor: pointer;
    padding: 0px 10px;
    height: inherit;

    font-size: 11px;
    white-space: nowrap;

    background-color: ${({ isActive }) => isActive && '#666666'};
    color: ${({ isActive }) => isActive && 'white'};

    border: 2px solid #D4D4D4;
    border-right: ${({ isLast }) => !isLast && 'none'};
    border-top-left-radius: ${({ isFirst, theme }) => isFirst && theme.border.radius};
    border-bottom-left-radius: ${({ isFirst, theme }) => isFirst && theme.border.radius};
    border-top-right-radius: ${({ isLast, theme }) => isLast && theme.border.radius};
    border-bottom-right-radius: ${({ isLast, theme }) => isLast && theme.border.radius};
    
    transition: background-color 0.2s ease-in; // fade in-out color change
`

export const SortOptionItemIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ reverseLayout }) => reverseLayout ?
        'margin-left: 5px;' :
        'margin-right: 5px;'
    };

    width: 15px;
    color: #B4B4B4;
`

export const SortButton = styled.a`

`

export const Content = styled.div`
    height: 86vh;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.screen.sizeL}) {
        height: 82vh;
    }
`

export const AppliedFilters = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 10px;
    margin-left: 20px;
`

export const ItemCount = styled.div`
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSizes.use('h5')};
`
export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const FilterIcon = styled(FaSlidersH)`
    opacity: 0.3;
`

export const FilterList = styled.div`
    margin: 0px 5px;
`

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid #D4D4D4;
    background-color: white;
    height: 25px;

    margin: 0px 5px;

    cursor: pointer;
`

export const FilterText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: ${({ theme }) => theme.fontSizes.use('h6')};
    height: inherit;

    border-right: 1px solid #D4D4D4;

    padding: 0px 7px;
`

export const FilterXBtn = styled(FaTimes)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    height: 25px;
    width: 25px;
    padding: 0px 9px;
    color: #B4B4B4;
`

export const ClearBtn = styled.a`
    text-decoration: underline;
    font-size: ${({ theme }) => theme.fontSizes.use('h6')};
    color: ${({ theme }) => theme.colors.fontMuted};
    opacity: 0.8;
`

export const ListContainer = styled.div`
    height: inherit;
    width: inherit;
`

export const GridContainer = styled.div`
    height: inherit;
    width: inherit;
`

export const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;

    height: inherit;
    overflow-y: scroll;
`