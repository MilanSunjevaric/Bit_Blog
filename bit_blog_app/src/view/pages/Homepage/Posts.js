import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../../service/PostService'
import Post from '../../../model/Post'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []

        }

    }
    componentDidMount() {
        fetchPost()
            .then(postovi => {
                this.setState({ posts: postovi })
                console.log(postovi);

            })
    }
    render() {

        const filteredPosts = this.state.posts.map(post => (
            <li>
                <h3 className="postTitle"><Link to={`/post/${post.titleID}`}>{post.title}</Link></h3>
                <p className="titleBody">{post.body}</p>

            </li>

        ))



        return (<div className="main-div">
            <ul className="ul-posts">
                {filteredPosts}
            </ul>
        </div>)
    }
}




export default Posts