import { Button } from '../../../styles/Button.styled';
import {
    Container,
    ContentContainer,
    Header,
    PriceContainer,
    Price,
    Monthly,
    SubscriptionDetails,
    BtnWrapper
} from './MembershipCard.styled';

const MembershipCard = ({
    option,
    price,
    benefits,
    isCurrentPlan
}) => {
    return (
        <Container>
            <ContentContainer>
                <Header>{option}</Header>
                <PriceContainer>
                    <Price>{price}</Price>
                    <Monthly>/Monthly</Monthly>
                </PriceContainer>
                <SubscriptionDetails>
                    {benefits.map((item) => {
                        return <li>{item}</li>
                    })}
                </SubscriptionDetails>
            </ContentContainer>
            <BtnWrapper>
                <Button disabled={isCurrentPlan}>
                    {isCurrentPlan ?
                        'Current Plan' :
                        'Subscribe'
                    }
                </Button>
            </BtnWrapper>
        </Container>
    )
}

export default MembershipCard
