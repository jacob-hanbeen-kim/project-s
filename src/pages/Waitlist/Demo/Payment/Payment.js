import React from 'react'
import { Button } from '../../../../styles/Button.styled'

const Payment = ({ setState }) => {
    return (
        <div>
            <div>Complete</div>
            <Button onClick={setState}>Try Again</Button>
        </div>
    )
}

export default Payment