import {
    Container,
    ContentContainer,
    HeaderContainer,
    Title,
    Subtitle,
    MembershipContainer
} from './Membership.styled';

import MembershipCard from './MembershipCard/MembershipCard';
import { basicMembership, proMembership, permiumMembership } from './MembershipData';

const Membership = () => {
    return (
        <Container>
            <ContentContainer>
                <HeaderContainer>
                    <Title>Subscription</Title>
                    <Subtitle>We have only one mesaure of success. <span>Yours</span></Subtitle>
                </HeaderContainer>
                <MembershipContainer>
                    <MembershipCard {...basicMembership} isCurrentPlan={true} />
                    <MembershipCard {...proMembership} />
                    <MembershipCard {...permiumMembership} />
                </MembershipContainer>
            </ContentContainer>
        </Container>
    )
}

export default Membership
