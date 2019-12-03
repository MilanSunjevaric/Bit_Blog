import React from 'react'
import { Link } from 'react-router-dom'

const AuthorListItem = (props) => {
    return (

        <div>
            <ul>

                <li><Link to='/SingleAuthor'>Name Surname (2-posts)</Link></li>
                <li><Link to='/SingleAuthor'>Name Surname (2-posts)</Link></li>
                <li><Link to='/SingleAuthor'>Name Surname (2-posts)</Link></li>

            </ul>


        </div>
    )
}

export default AuthorListItem