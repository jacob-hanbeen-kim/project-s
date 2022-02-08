import PropTypes from 'prop-types'

import {
    Icon,
    Image
} from './ProfileImg.styled';

import { FaRegUserCircle } from 'react-icons/fa'

const ProfileImg = ({ src, children, size, hasProfileImg }) => {
    return (
        <>
            {
                hasProfileImg ?
                    <Image src={src} size={size} /> :
                    <Icon size={size}>
                        {children}
                    </Icon>

            }
        </>
    )
}

ProfileImg.defaultProps = {
    src: process.env.PUBLIC_URL + '/images/login/profileImg.jpg',
    children: <FaRegUserCircle />,
    hasProfileImg: false
}

ProfileImg.propTypes = {
    size: PropTypes.string,
    hasProfileImg: PropTypes.bool
}

export default ProfileImg
