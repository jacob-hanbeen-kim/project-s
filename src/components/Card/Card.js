import PropTypes from 'prop-types'

import {
    CardContainer,
    CardFlex,
    CardImage,
    CardContent,
} from './Card.styled'
import { Button } from '../../styles/Button.styled';

const Card = ({
    image,
    title,
    details,
    buttonTxt,
    backgroundColor,
    color,
    layout,
    children,
    onClick
}) => {
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
                    {children}
                    <Button color={color} bg={backgroundColor} onClick={onClick}>
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
