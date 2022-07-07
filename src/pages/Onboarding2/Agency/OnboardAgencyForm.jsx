import React, { useState } from 'react'
import AgencyPageOne from './AgencyPageOne';
import AgencyPageTwo from './AgencyPageTwo';
import Confirm from './Confirm';

const OnboardAgencyForm = () => {

    const [states, setStates] = useState({
        step: 1,
        name: '',
        client: '',
        pay_base: '',
        deals: {
            equipmentEndorsement: false,
            mediaAdvertisement: false,
            socialMediaCollaboration: false,
            onsiteAdvertisement: false,
            logoOnApparel: false,
            others: false,
        }
    })

    //Proceed to next page
    const nextStep = () => {
        const { step } = states;
        setStates({...states, 
            step: step + 1
        });
        console.log(states)
    }

    //Go back to previous page
    const previousStep = () => {
        const { step } = states;
        setStates({...states,
            step: step - 1
        });
        console.log(states)
    }

    //Handle fields change
    const handleChange = input => e => {
        setStates({...states, [input]: e.target.value})
        console.log(states)
    }

    const { step } = states;
    const { name, client, pay_base, 
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others} = states;
    const values = {name, client, pay_base,
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others};
    
    switch(step) {
        case 1: 
            return (
                <AgencyPageOne 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 2: 
            return (
                <AgencyPageTwo 
                    nextStep = {nextStep}
                    previousStep = {previousStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 3: 
            return (
                <Confirm/>
            )
    }
    
}

export default OnboardAgencyForm