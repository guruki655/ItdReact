import React from 'react';
import Navbar from '../components/Navbar';
import PaymentComponent from '../components/Payment';
function ProceedToPayment() {
    return (
        <>
            <div className="container bg-white">
                <Navbar />
                <div className='row'>
                 <PaymentComponent/>   
                </div>
            </div>
        </>
    );
}

export default ProceedToPayment;
