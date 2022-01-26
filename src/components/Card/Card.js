import PropTypes from 'prop-types'

import {
    CardContainer,
    CardFlex,
    CardImage,
    CardContent,
} from './Card.styled'
import { Button } from '../../styles/Button.styled';

const Card = ({ image, title, details, buttonTxt, backgroundColor, color, layout }) => {
    return (
        <CardContainer>
            <CardFlex backgroundColor={backgroundColor} layout={layout}>
                {image &&
                    <CardImage layout={layout}>
                        <img src={image} alt="" />
                    </CardImage>
                }
                <CardContent color={color}>
                    {title && <h2>{title}</h2>}
                    {details && <p>{details}</p>}
                    <Button color={color} bg={backgroundColor}>
                        {buttonTxt}
                    </Button>
                </CardContent>
            </CardFlex>
        </CardContainer>
    )
}

Card.defaultProps = {
    buttonTxt: 'Learn More',
    layout: 'column'
}

Card.propTypes = {
    // title: PropTypes.string.isRequired,
}


export default Card
