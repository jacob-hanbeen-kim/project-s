import React, { useState } from 'react'
import SponsorPageOne from './SponsorPageOne';
import SponsorPageTwo from './SponsorPageTwo';
import SponsorPageThree from './SponsorPageThree';
import Confirm from './Confirm';

const OnboardSponsorForm = () => {

    const [states, setStates] = useState({
        step: 1,
        enterprise: '',
        name: '',
        location: '',
        industry: '',
        revenue: '',
        website: '',
        email: '',
        budget: '',
        time_period: '',
        interest: '',
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
    const {enterprise, name, location, industry, revenue, website, email, budget, time_period, interest, deals,
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others} = states;
    const values = {enterprise, name, location, industry, revenue, website, email, budget, time_period, interest, deals,
        equipmentEndorsement, mediaAdvertisement, socialMediaCollaboration, onsiteAdvertisement, logoOnApparel, others};
    
    switch(step) {
        case 1: 
            return (
                <SponsorPageOne 
                    nextStep = {nextStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 2: 
            return (
                <SponsorPageTwo 
                    nextStep = {nextStep}
                    previousStep = {previousStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
        case 3: 
            return (
                <SponsorPageThree 
                    nextStep = {nextStep}
                    previousStep = {previousStep}
                    handleChange = {handleChange}
                    values = {values}
                />
            )
    }
    
}

export default OnboardSponsorForm