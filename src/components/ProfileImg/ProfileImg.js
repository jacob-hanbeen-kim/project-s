import PropTypes from 'prop-types'

import {
    Icon,
    Image
} from './ProfileImg.styled';

import { FaRegUserCircle } from 'react-icons/fa'

const ProfileImg = ({ src, children, size, hasProfileImg }) => {

    //in your component
    function addDefaultSrc(ev) {
        ev.target.src = process.env.PUBLIC_URL + '/images/account/profileImg.png';
    }

    return (
        <>
            {
                hasProfileImg ?
                    <Image src={src} size={size} onError={addDefaultSrc} /> :
                    <Icon size={size}>
                        {children}
                    </Icon>

            }
        </>
    )
}

ProfileImg.defaultProps = {
    src: process.env.PUBLIC_URL + '/images/account/profileImg.png',
    children: <FaRegUserCircle />,
    hasProfileImg: false
}

ProfileImg.propTypes = {
    size: PropTypes.string,
    hasProfileImg: PropTypes.bool
}

export default ProfileImg
