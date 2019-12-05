import React from 'react'
import { Link } from 'react-router-dom'

const MorePosts = (props) => {

    console.log(props);
    const filteredPosts = props.more.map(post => (

        <li>
            {/* {post.title} */}

            <h3 className="postTitle"><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
        </li >
    )
    )

    return (

        <ul>
            <h3>More posts from same author</h3>
            <li>{filteredPosts}</li>
        </ul>
    )
}

export default MorePosts