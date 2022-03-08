import { useState, useEffect } from 'react'
import { Text, Input } from '../../../components'
import {
    Aside,
    Header,
    Container,
    FilterContainer
} from './Sidebar.styled'

const Sidebar = ({ setFilters }) => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');
    const [numbContract, setNumbContract] = useState('');
    const [socialMedialScore, setSocialMedialScore] = useState('');

    useEffect(() => {
        setFilters({ search, category, country, numbContract, socialMedialScore });
    }, [search, category, country, numbContract, socialMedialScore])

    return (
        <Aside>
            <Header>
                <Text variant='h2'>Filters</Text>
                <Text variant='subtitle'>clear</Text>
            </Header>
            <Container>
                <FilterContainer>
                    <Text>Search</Text>
                    <Input onChange={(e) => setSearch(e.target.value)} />
                </FilterContainer>
                <FilterContainer>
                    <Text>Sports Category</Text>
                    <Input onChange={(e) => setCategory(e.target.value)} />
                </FilterContainer>
                <FilterContainer>
                    <Text>Country</Text>
                    <Input onChange={(e) => setCountry(e.target.value)} />
                </FilterContainer>
                <FilterContainer>
                    <Text># of Current Contracts</Text>
                    <Input onChange={(e) => setNumbContract(e.target.value)} />
                </FilterContainer>
                <FilterContainer>
                    <Text>Social Media Score</Text>
                    <Input onChange={(e) => setSocialMedialScore(e.target.value)} />
                </FilterContainer>
            </Container>
        </Aside>
    )
}

export default Sidebar