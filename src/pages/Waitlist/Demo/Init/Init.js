import { Card } from "../../../../components"

const Init = ({ setState, setOfferInfo }) => {

    const sendOffer = () => {
        setState();
        setOfferInfo({
            title: "Package 1",
            includes: [
                'Metion in Sns',
                'Participate in 1 event'
            ]
        })
    }

    return (
        <Card
            title="Packge 4"
            details="Includes Followings"
            buttonTxt="Offer"
            onClick={sendOffer}
        >
            <ul>
                <li>Metion in Sns</li>
                <li>Participate in 1 event</li>
            </ul>
        </Card>
    )
}

export default Init