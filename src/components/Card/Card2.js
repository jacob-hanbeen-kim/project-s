import { StyledCard } from './Card2.styled'

const Card2 = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt="" />;
            </div>
        </StyledCard>
    )
}

export default Card2
