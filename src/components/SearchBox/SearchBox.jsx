import { Input } from '..';
import {
    SearchIconContainer,
    SearchIcon
} from './SearchBox.styled';


const SearchBox = (props) => {
    return (
        <Input reverse={true} {...props}>
            <SearchIconContainer>
                <SearchIcon />
            </SearchIconContainer>
        </Input>
    )
}

export default SearchBox
