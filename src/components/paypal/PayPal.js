import React, { useEffect, useRef } from "react";

export default function PayPal() {

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "donation",
                            amount: {
                                currency_code: "USD",
                                value: 650.00,
                            }
                        }
                    ]
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])


    return (
        <div ref={paypal} style={{
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        }}>

        </div>
    )
}