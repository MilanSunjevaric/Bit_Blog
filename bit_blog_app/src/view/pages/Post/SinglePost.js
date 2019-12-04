import React from 'react'
import { Link } from 'react-router-dom'



// class SinglePost extends React.Component {
//     constructor(props) {
//         super(props)


//     }

// }








const SinglePost = () => {
    return (
        <div>
            <h2>Single Post Title</h2>
            <h3><Link to='/SingleAuthor'>Author Name</Link></h3>

            <p></p>
            <div>
                <p>More posts from same author</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default SinglePost