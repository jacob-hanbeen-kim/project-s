import {
    Container,
    SearchBoxConatiner,
    SearchIconContainer,
    SearchIcon,
    SearchInput
} from './SearchBox.styled';


const SearchBox = ({ }) => {
    return (
        <Container>
            <SearchBoxConatiner>
                <SearchIconContainer>
                    <SearchIcon />
                </SearchIconContainer>
                <SearchInput>
                    {/* Search */}
                </SearchInput>
            </SearchBoxConatiner>
        </Container>
    )
}

export default SearchBox
