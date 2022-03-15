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
import { useState } from 'react';
import { useEffect } from 'react';

const MembershipCard = ({
    membershipType,
    price,
    priceYearly,
    benefits,
    isCurrentPlan,
    onClick
}) => {
    const [save, setSave] = useState(null);

    useEffect(() => {
        const orgPrice = price * 12;
        const saveRate = Math.ceil((1 - priceYearly / orgPrice) * 100);
        setSave(saveRate);
    }, [])

    return (
        <Container>
            <ContentContainer>
                <Header>{membershipType}</Header>
                <PriceContainer>
                    <PriceWrap>
                        {price === 0 ?
                            <Price>Free</Price> :
                            <>
                                <Price>${price / 100}</Price>
                                <Recurrence>/month</Recurrence>
                            </>
                        }
                    </PriceWrap>
                    {priceYearly > 0 &&
                        <>
                            <Conjunction>or</Conjunction>
                            <PriceWrap>
                                <Price>${priceYearly / 100}</Price>
                                <Recurrence>/year</Recurrence>
                            </PriceWrap>
                        </>
                    }
                </PriceContainer>
                {
                    save > 0 &&
                    <Tag>
                        {save}%
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
                    <Button disabled={isCurrentPlan} onClick={onClick}>
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
