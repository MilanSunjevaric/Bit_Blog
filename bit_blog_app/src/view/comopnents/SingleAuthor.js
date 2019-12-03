import React from 'react'
import NameSurname from './NameSurname'
import Address from './Address'
import Company from './Company'
import { Link } from 'react-router-dom'


const SingleAuthor = (props) => {

    return (

        <div>
            <p><Link to='/Authors'>All authors</Link></p>
            <NameSurname />
            <Address />
            <Company />

        </div>

    )
}

export default SingleAuthor
