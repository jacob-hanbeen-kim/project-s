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
import { MembershipService } from '../../services/membership-service';
import { StripeService } from '../../services/stripe-service';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Membership = () => {

    const { currentUser } = useAuth();

    const [memberships, setMemberships] = useState([]);

    useEffect(() => {
        MembershipService.getMemberships().then((memberships) => {
            console.log(memberships);
            setMemberships(memberships);
        });
    }, [])

    const createPaymentLink = (membership) => {
        // console.log(proMembership);
        StripeService.createPaymentLink(currentUser.id, membership.id, membership.monthly_price, 'month').then((res) => {
            console.log(res);
            if (res.status === 200) {
                let win = window.open(res.url, '_blank');
                win.focus();
            }
        });
    }

    const checkCurrentPlan = (membershipType) => {
        return (membershipType?.toLowerCase() === currentUser.membership?.toLowerCase()) ?
            true :
            false;
    }

    return (
        <Container>
            <ContentContainer>
                <HeaderContainer>
                    <Title>Subscription</Title>
                    <Subtitle>We have only one mesaure of success. <span>Yours</span></Subtitle>
                </HeaderContainer>
                <MembershipContainer>
                    {
                        memberships.map((membership, idx) => {
                            return <MembershipCard
                                key={idx}
                                membershipType={membership.id}
                                price={membership.monthly_price}
                                priceYearly={membership.yearly_price}
                                benefits={membership.benefits}
                                isCurrentPlan={checkCurrentPlan(membership.id)}
                                onClick={() => createPaymentLink(membership)}
                            />
                        })
                    }
                </MembershipContainer>
            </ContentContainer>
        </Container>
    )
}

export default Membership
