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

const Sidebar = ({ applyFilter, filterItems }) => {

    const [values, setValues] = useState({});


    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const resetValues = () => {
        setValues({});
    }

    return (
        <Aside>
            <Header>
                <FilterIcon></FilterIcon>
                <Text variant='h4'>Filters</Text>
            </Header>
            <Form onSubmit={(e) => applyFilter(e, values, resetValues)}>
                {
                    filterItems.map((key) => {
                        return (
                            <FilterContainer key={key}>
                                <Text>{key.toUpperCase()}</Text>
                                <InputContainer>
                                    <Input
                                        name={key}
                                        type="text"
                                        value={values[key] ? values[key] : ''}
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