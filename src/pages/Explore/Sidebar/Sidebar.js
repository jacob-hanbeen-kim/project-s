import { useState, useEffect } from 'react'
import { Text, Input } from '../../../components'
import {
    Aside,
    Header,
    Form,
    FilterContainer,
    InputContainer,
    FilterIcon
} from './Sidebar.styled'

const filterItems = {
    sports: '',
    country: '',
    leaguge: '',
    team: '',
    age: '',
}

const Sidebar = ({ applyFilter }) => {

    const [values, setValues] = useState(filterItems);


    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const resetValues = () => {
        setValues(filterItems);
    }

    return (
        <Aside>
            <Header>
                <FilterIcon></FilterIcon>
                <Text variant='h4'>Filters</Text>
            </Header>
            <Form onSubmit={(e) => applyFilter(e, values, resetValues)}>
                {
                    Object.keys(values).map((key, idx) => {
                        return (
                            <FilterContainer key={idx}>
                                <Text>{key.toUpperCase()}</Text>
                                <InputContainer>
                                    <Input
                                        name={key}
                                        type="text"
                                        value={values[key]}
                                        placeholder={`Filter by ${key}`}
                                        onChange={handleInputChange}
                                    />
                                </InputContainer>
                            </FilterContainer>
                        )
                    })
                }

                <button type='submit' style={{ display: 'none' }} />
            </Form>
        </Aside>
    )
}

export default Sidebar