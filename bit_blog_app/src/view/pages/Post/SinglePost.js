import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../../service/PostService'


class SinglePosts extends React.Component {
    constructor(props) {
        super(props)

        this.postId = this.props.match.params.id

        this.state = {
            post: null

        }

    }

    // getPost() {
    //     fetchPost(this.postId)
    // }

    componentDidMount() {
        fetchPost(this.postId)
            .then(post => this.setState({ post: post }))
        //this.setState({ post: {} })

    }

    render() {
        if (!this.state.post) {
            return <h2>Loading...</h2>;
        }

        return (<div className="main-div">
            <ul className="ul-posts">
                <h2>SINGLE POST TITLE</h2>
                <h2>{this.state.post.title}</h2>
            </ul>
        </div>)
    }
}

export default SinglePosts
