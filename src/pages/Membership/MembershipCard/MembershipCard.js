import { Button } from '../../../styles/Button.styled';
import { Tag } from '../../../components';
import {
    Container,
    ContentContainer,
    Header,
    PriceContainer,
    PriceWrap,
    Price,
    Recurrence,
    Conjunction,
    SubscriptionDetails,
    SubscriptionIcon,
    BtnWrapper
} from './MembershipCard.styled';

const MembershipCard = ({
    option,
    price,
    priceYearly,
    save,
    benefits,
    isCurrentPlan
}) => {
    return (
        <Container>
            <ContentContainer>
                <Header>{option}</Header>
                <PriceContainer>
                    <PriceWrap>
                        {price === null ?
                            <Price>Free</Price> :
                            <>
                                <Price>{price}</Price>
                                <Recurrence>/month</Recurrence>
                            </>
                        }
                    </PriceWrap>
                    {priceYearly &&
                        <>
                            <Conjunction>or</Conjunction>
                            <PriceWrap>
                                <Price>{priceYearly}</Price>
                                <Recurrence>/year</Recurrence>
                            </PriceWrap>
                        </>
                    }
                </PriceContainer>
                {
                    save &&
                    <Tag>
                        {save}
                    </Tag>
                }
            </ContentContainer>
            <div>
                <SubscriptionDetails>
                    {benefits.map((item) => {
                        return (
                            <li>
                                <SubscriptionIcon />
                                {item}
                            </li>
                        )
                    })}
                </SubscriptionDetails>
                <BtnWrapper>
                    <Button disabled={isCurrentPlan}>
                        {isCurrentPlan ?
                            'Current Plan' :
                            'Subscribe'
                        }
                    </Button>
                </BtnWrapper>
            </div>
        </Container >
    )
}

export default MembershipCard
