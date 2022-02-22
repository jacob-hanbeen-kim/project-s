import {
    Container,
    TeamDesignContainer,
    SponsorDesignContainer,
    Or
} from './SideFormBar.styled';

import { SearchBox, Input } from '../../../../components';


const SideFormBar = ({ }) => {
    return (
        <Container>
            <TeamDesignContainer>
                <p>Your Team</p>
                <SearchBox />
                <p>Color 1</p>
                <Input />
                <p>Color 2</p>
                <Input />
                <p>Color 3</p>
                <Input />
            </TeamDesignContainer>
            <SponsorDesignContainer>
                <p>Find Sponsor</p>
                <SearchBox />
                <Or>or</Or>
                <div>
                    upload photo
                </div>
            </SponsorDesignContainer>
        </Container>
    )
}

export default SideFormBar
