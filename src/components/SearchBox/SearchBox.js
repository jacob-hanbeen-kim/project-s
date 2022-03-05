import { Input } from '..';
import {
    SearchIconContainer,
    SearchIcon
} from './SearchBox.styled';


const SearchBox = ({ }) => {
    return (
        <Input reverse={true}>
            <SearchIconContainer>
                <SearchIcon />
            </SearchIconContainer>
        </Input>
    )
}

export default SearchBox
