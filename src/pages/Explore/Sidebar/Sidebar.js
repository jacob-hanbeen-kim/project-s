import { useState, useEffect } from 'react'
import { Text, Input } from '../../../components'
import {
    Aside,
    Header,
    Container,
    FilterContainer,
    InputContainer,
    FilterIcon
} from './Sidebar.styled'

const Sidebar = ({ setFilters }) => {

    const [sports, setSports] = useState('');
    const [country, setCountry] = useState('');
    const [league, setLeague] = useState('');
    const [team, setTeam] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        setFilters({ sports, country, league, team, age });
    }, [sports, country, league, team, age])

    return (
        <Aside>
            <Header>
                <FilterIcon></FilterIcon>
                <Text variant='h4'>Filters</Text>
                {/* <Text variant='h4'>clear</Text> */}
            </Header>
            <Container>
                <FilterContainer>
                    <Text>SPORTS</Text>
                    <InputContainer>
                        <Input onChange={(e) => setSports(e.target.value)} />
                    </InputContainer>
                </FilterContainer>
                <FilterContainer>
                    <Text>COUNTRY</Text>
                    <InputContainer>
                        <Input onChange={(e) => setCountry(e.target.value)} />
                    </InputContainer>
                </FilterContainer>
                <FilterContainer>
                    <Text>LEAGUE</Text>
                    <InputContainer>
                        <Input onChange={(e) => setLeague(e.target.value)} />
                    </InputContainer>
                </FilterContainer>
                <FilterContainer>
                    <Text>TEAM</Text>
                    <InputContainer>
                        <Input onChange={(e) => setTeam(e.target.value)} />
                    </InputContainer>
                </FilterContainer>
                <FilterContainer>
                    <Text>AGE</Text>
                    <InputContainer>
                        <Input onChange={(e) => setAge(e.target.value)} />
                    </InputContainer>
                </FilterContainer>
            </Container>
        </Aside>
    )
}

export default Sidebar