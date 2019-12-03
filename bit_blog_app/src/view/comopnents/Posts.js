import React from 'react'

import { Link } from 'react-router-dom'

const Posts = (props) => {
    return (
        <div className="main-div">
            <ul className="ul-posts">
                <li>
                    <h3><Link to='/SinglePost'>Title 1</Link></h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipscing elit...</p>
                </li>
                <li>
                    <h3><Link to='/SinglePost'>Title 1</Link></h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipscing elit...</p>
                </li>
                <li>
                    <h3><Link to='/SinglePost'>Title 1</Link></h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipscing elit...</p>
                </li>


            </ul>
        </div>
    )
}

export default Posts