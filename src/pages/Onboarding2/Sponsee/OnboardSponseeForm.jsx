import React, { useState } from 'react'
import SponseePageOne from './SponseePageOne';
import SponseePageTwo from './SponseePageTwo';
import Confirm from './Confirm';

const OnboardSponseeForm = () => {

    const [states, setStates] = useState({
        step: 1,
        occupation: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        sport: '',
        agency: false,
        association: '',
        deals: {
            equipmentEndorsement: false,
            mediaAdvertisement: false,
            socialMediaCollaboration: false,
            onsiteAdvertisement: false,
            logoOnApparel: false,
            others: false,
        },
        amount: ''
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
    const {occupation, firstName, lastName, email, mobile, sport, agency, association, amount, deals,
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others} = states;
    const values = {occupation, firstName, lastName, email, mobile, sport, agency, association, amount, deals,
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others};
    
    switch(step) {
        case 1: 
            return (
                <SponseePageOne 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 2: 
            return (
                <SponseePageTwo 
                    nextStep = {nextStep}
                    previousStep = {previousStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 3: 
            return (
                <Confirm />
            )
    }
    
}

export default OnboardSponseeForm