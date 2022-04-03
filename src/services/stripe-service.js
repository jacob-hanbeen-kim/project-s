

const createPaymentLink = (account_id, membership, price, recurring) => {
    const baseUrl = "https://us-central1-project-s-backend.cloudfunctions.net/stripeServerApp";
    // const baseUrl = "http://localhost:5001/project-s-backend/us-central1";

    return fetch(`${baseUrl}/paymentlink`,
        {
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                account_id,
                membership,
                price: "10000",
                recurring,
            })
        }
    ).then(response => response.json()
    ).then(data => {
        // return `Bearer ${data.token}`
        console.log(data);
        return data;
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });;
}

export const StripeService = {
    createPaymentLink
}