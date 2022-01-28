import PropTypes from 'prop-types'

import {
    Icon,
    Image
} from './ProfileImg.styled';

const ProfileImg = ({ size, hasProfileImg }) => {
    return (
        <>
            {
                hasProfileImg ?
                    <Image src={'images/login/profileImg.jpg'} size={size} /> :
                    <Icon size={size} />
            }
        </>
    )
}

ProfileImg.defaultProps = {
    hasProfileImg: false
}

ProfileImg.propTypes = {
    size: PropTypes.string,
    hasProfileImg: PropTypes.bool
}

export default ProfileImg
