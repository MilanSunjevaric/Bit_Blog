import React from 'react'


const Address = (props) => {

    return (
        <div >

            <h2 className="nameHeader address">Address</h2>
            <div className="flexarino">
                <div className="flexDivOne">
                    <p>street: <span>{props.street}</span> </p>
                    <p>city: <span>{props.city}</span></p>
                    <p>zipcode: <span>{props.zip}</span></p>
                </div>
                <div className="flexDivTwo">
                    <iframe
                        width="10%"
                        height="50%"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://maps.google.com/maps?q=${props.latitude},${props.longitude}&z=15&output=embed`}
                    />
                </div>
            </div>
        </div>
    )
}

export default Address