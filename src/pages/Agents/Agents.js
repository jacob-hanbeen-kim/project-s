import InfoSection from '../../components/InfoSection';
import { homeObjOne, homeObjTwo } from './Data'


const Agents = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
        </>
    )
}


export default Agents
