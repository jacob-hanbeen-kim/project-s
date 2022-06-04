import PropTypes from 'prop-types'

import {
    Icon,
    Image
} from './ProfileImg.styled';

import { FaRegUserCircle } from 'react-icons/fa'

const ProfileImg = ({
    src,
    children,
    size,
    maxSize,
    minSize,
    hasProfileImg,
    hasBorder,
    borderSize,
    borderColor
}) => {

    //in your component
    function addDefaultSrc(ev) {
        ev.target.src = process.env.PUBLIC_URL + '/images/account/profileImg.png';
    }

    return (
        <>
            {
                hasProfileImg ?
                    <Image
                        src={src}
                        size={size}
                        maxSize={maxSize}
                        minSize={minSize}
                        onError={addDefaultSrc}
                        hasBorder={hasBorder}
                        borderSize={borderSize}
                        borderColor={borderColor}
                    /> :
                    <Icon
                        size={size}
                        maxSize={maxSize}
                        minSize={minSize}
                        hasBorder={hasBorder}
                        borderSize={borderSize}
                        borderColor={borderColor}
                    >
                        {children}
                    </Icon>

            }
        </>
    )
}

ProfileImg.defaultProps = {
    src: process.env.PUBLIC_URL + '/images/account/profileImg.png',
    children: <FaRegUserCircle />,
    hasProfileImg: false,
    hasBorder: false,
    borderSize: '5px',
    borderColor: 'white'
}

ProfileImg.propTypes = {
    size: PropTypes.string,
    hasProfileImg: PropTypes.bool
}

export default ProfileImg
