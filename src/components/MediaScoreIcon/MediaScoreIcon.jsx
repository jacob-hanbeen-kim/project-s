import {
    Container
} from './MediaScoreIcon.styled'

const MediaScoreIcon = ({ size }) => {
    return (
        <Container size={size}>
            <img src={process.env.PUBLIC_URL + '/images/account/marketScore.svg'} alt='MarketScore Icon' />
        </Container>
    )
}

export default MediaScoreIcon