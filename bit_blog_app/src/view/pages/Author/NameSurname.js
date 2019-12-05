import React from 'react'
import { fetchAuthor } from '../../../service/AuthorService'
import { fetchAuthors } from '../../../service/AuthorsService'






const NameSurname = (props) => {
    return (

        <div>

            <h1 className="nameHeader">Single Author</h1>
            <div className="nameSurname">
                <img />
                <h3 className="autoName">{props.name}</h3>
                <p className="parColor">username: <span className="spanColor">{props.username}</span></p>
                <p className="parColor">email: <span className="spanColor">{props.email}</span></p>
                <p className="parColor">phone: <span className="spanColor">{props.phone}</span></p>
            </div>
        </div>
    )
}

export default NameSurname


