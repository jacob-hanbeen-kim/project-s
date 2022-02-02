import PropTypes from 'prop-types'

import {
    MemberIcon,
    NonMemberIcon
} from './MembershipStatus.styled';

const MembershipStatus = ({ size, hasMembership }) => {
    return (
        <>
            <p>Membership Status : 
            {
                hasMembership ?
                    <MemberIcon size={size} /> :
                    <NonMemberIcon size={size} />
            }
            </p>
        </>
    )
}

MembershipStatus.defaultProps = {
    hasMembership: false
}

MembershipStatus.propTypes = {
    size: PropTypes.string,
    hasMembership: PropTypes.bool
}

export default MembershipStatus