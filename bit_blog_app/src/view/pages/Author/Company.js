import React from 'react'

const Company = (props) => {
    return (

        <div className="company">
            <h2 className="nameHeader">Company</h2>
            <div className="compDiv">
                <p>name: <span>{props.companyName}</span> </p>
                <p>slogan: <span>{props.companySlogan}</span></p>
            </div>
        </div>
    )
}

export default Company