import {
    Container,
    LocationIcon
} from './Icons.styled'

const Icons = ({ icon, size }) => {

    const getIcon = () => {
        switch (icon) {
            case 'location': return <LocationIcon />
            default: return 'no icon found'
        }
    }

    return (
        <Container size={size}>{getIcon()}</Container>
    )
}

export default Icons