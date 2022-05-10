import {
    Container,
    Wrapper,
    Icon
} from './SportIcon.styled';
import { Sports } from '../../constants/Sports';
import {
    FaRegFutbol,
    FaBasketballBall,
    FaBaseballBall,
    FaBowlingBall,
    FaFootballBall,
    FaVolleyballBall,
    FaTableTennis,
    FaRunning,
    FaSkiing,
    FaSnowboarding,
    FaSkating,
    FaSwimmer
} from 'react-icons/fa';

const SportIcon = ({ sport }) => {
    const getIcon = () => {
        switch (sport) {
            case Sports.SOCCER: return <FaRegFutbol />;
            case Sports.BASKETBALL: return <FaBasketballBall />;
            case Sports.BASEBALL: return <FaBaseballBall />;
            case Sports.BOWLING: return <FaBowlingBall />;
            case Sports.FOOTBALL: return <FaFootballBall />;
            case Sports.VOLLEYBALL: return <FaVolleyballBall />;
            case Sports.TABLETENNIS: return <FaTableTennis />;
            case Sports.RUN: return <FaRunning />;
            case Sports.SKI: return <FaSkiing />;
            case Sports.SNOWBOARD: return <FaSnowboarding />;
            case Sports.SKATE: return <FaSkating />;
            case Sports.SWIM: return <FaSwimmer />;
            default: return;
        }
    }

    return (
        <Container>
            <Wrapper>
                <Icon>
                    {
                        getIcon()
                    }
                </Icon>
            </Wrapper>
        </Container>
    )
}

export default SportIcon