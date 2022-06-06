import {
    Container,
    UploadContainer,
    ApparelListContainer,
    ApparelList,
    ApparelItem,
    Uploader
} from './SideFormBar.styled';

import { SearchBox, Input } from '../../../../../components';


const SideFormBar = ({ }) => {
    return (
        <Container>
            <UploadContainer>
                <Uploader />
            </UploadContainer>
            <ApparelListContainer>
                <ApparelList>
                    <ApparelItem selected={true}>
                        Home
                    </ApparelItem>
                    <ApparelItem>
                        Away
                    </ApparelItem>
                    <ApparelItem>
                        Training Kit
                    </ApparelItem>
                    <ApparelItem>
                        Training Kit 2
                    </ApparelItem>
                    <ApparelItem>
                        Training Kit 3
                    </ApparelItem>
                </ApparelList>
            </ApparelListContainer>
        </Container>
    )
}

export default SideFormBar
