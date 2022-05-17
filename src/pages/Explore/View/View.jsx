import { useState } from 'react';
import {
    Container,
    Header,
    Tabs,
    TabContainer,
    Tab,
    Options,
    ViewOptions,
    GridIcon,
    ListIcon,
    ViewOptionIconContainer,
    SortOptions,
    SortOptionItem,
    SortOptionItemIcon,
    Content,
    AppliedFilters,
    ItemCount,
    Filters,
    FilterIcon,
    FilterList,
    Filter,
    FilterText,
    FilterXBtn,
    ClearBtn,
    ListContainer
} from './View.styled'
import ListView from './ListView/ListView.jsx';
import GridView from './GridView/GridView';
import { FaSortAlphaDown, FaSortAmountDown } from 'react-icons/fa';

const users = [
    { name: "Jacob Kim", age: 26, sports: "Soccer", location: "GA, USA", mediaScore: "1,800" },
    { name: "Daniel Lee", age: 25, sports: "Soccer", location: "GA, USA", mediaScore: "2,500" },
    { name: "Seunghun Jang", age: 26, sports: "Golf", location: "CA, USA", mediaScore: "3,00" },
    { name: "Minseok", age: 24, sports: "Golf", location: "GA, USA", mediaScore: "3,000" },
    { name: "James Jang", age: 23, sports: "Soccer", location: "GA, USA", mediaScore: "2,00" },
    { name: "James Jang", age: 23, sports: "Soccer", location: "GA, USA", mediaScore: "2,00" },
    { name: "James Jang", age: 23, sports: "Soccer", location: "GA, USA", mediaScore: "2,00" },
    { name: "James Jang", age: 23, sports: "Soccer", location: "GA, USA", mediaScore: "2,00" },
]

const sortOptions = [
    { label: 'Relevance', reverseLayout: false, icon: null },
    { label: 'Newest', reverseLayout: false, icon: null },
    { label: 'Market Score', reverseLayout: false, icon: <img src={process.env.PUBLIC_URL + '/images/account/marketScore.svg'} /> },
    { label: 'Name', reverseLayout: true, icon: <FaSortAlphaDown /> },
    { label: 'Price', reverseLayout: true, icon: <FaSortAmountDown /> },
]
//process.env.PUBLIC_URL + "/images/account/ethereum.svg"

const ViewOption = {
    GRID: 'grid',
    LIST: 'list'
}

const View = ({ data, tabs, filters, clearFilter, activeTab, onClickTab }) => {
    const [activeViewOption, setActiveViewOption] = useState(ViewOption.GRID);
    const [activeSortOption, setActiveSortOption] = useState(sortOptions[0].label);

    const handleSort = (label) => {
        setActiveSortOption(label);

        // if (!sortKey) return tableData;

        // #TODO: label 에 따라서 sortKey 정해주기
        let sortKey = 'nonce';

        const sortedData = data.sort((a, b) => {
            console.log(a, b);
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });

        data = sortedData;

        // if (reverse) {
        //     return sortedData.reverse();
        // }

        // setData(sortedData);
    }

    const getActiveView = () => {
        if (activeViewOption === ViewOption.GRID) {
            return <GridView users={data} />
        } else {
            return <ListView users={data} />
        }
    }

    return (
        <Container>
            <Header>
                <Tabs>
                    {tabs.map((tab, idx) =>
                        <TabContainer key={idx}>
                            <Tab
                                isActive={tab === activeTab}
                                onClick={() => onClickTab(tab)}
                            >
                                {tab}
                            </Tab>
                        </TabContainer>
                    )}
                </Tabs>
                <Options>
                    <ViewOptions>
                        <ViewOptionIconContainer isActive={activeViewOption === ViewOption.GRID} onClick={() => setActiveViewOption(ViewOption.GRID)}>
                            <GridIcon />
                        </ViewOptionIconContainer>
                        <ViewOptionIconContainer isActive={activeViewOption === ViewOption.LIST} onClick={() => setActiveViewOption(ViewOption.LIST)}>
                            <ListIcon />
                        </ViewOptionIconContainer>
                    </ViewOptions>
                    <SortOptions>
                        {sortOptions.map((option, idx) =>
                            <SortOptionItem
                                key={idx}
                                isActive={option.label === activeSortOption}
                                isFirst={idx === 0}
                                isLast={idx === sortOptions.length - 1}
                                onClick={() => handleSort(option.label)}
                                reverseLayout={option.reverseLayout}
                            >
                                {option.icon &&
                                    <SortOptionItemIcon reverseLayout={option.reverseLayout}>
                                        {option.icon}
                                    </SortOptionItemIcon>
                                }
                                <p>{option.label}</p>
                            </SortOptionItem>
                        )}
                    </SortOptions>
                </Options>
            </Header>
            <Content>
                <AppliedFilters>
                    <ItemCount>
                        {data.length} items
                    </ItemCount>
                    <Filters>
                        <FilterIcon />
                        <FilterList>
                            {Object.keys(filters).map((key, idx) => {
                                if (filters[key]) {
                                    return (
                                        <Filter key={idx}>
                                            <FilterText>
                                                {`${key}: ${filters[key]}`}
                                            </FilterText>
                                            <FilterXBtn />
                                        </Filter>
                                    )
                                }
                            })}
                        </FilterList>
                        <ClearBtn onClick={clearFilter}>Clear All</ClearBtn>
                    </Filters>
                </AppliedFilters>
                <ListContainer>
                    {getActiveView()}
                </ListContainer>
            </Content>
        </Container>
    )
}

export default View