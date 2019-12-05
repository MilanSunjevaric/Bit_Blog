import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPost, fetchMorePosts } from '../../../service/PostService'
import { fetchAuthor } from '../../../service/AuthorService'
import MorePosts from './MorePosts'


class SinglePosts extends React.Component {
    constructor(props) {
        super(props)

        this.postId = this.props.match.params.id
        this.authorId = this.props.match.params.id
        this.userId = this.props.match.params.id


        this.state = {
            post: null,
            author: null,
            morePost: []

        }


    }

    componentDidMount() {
        this.getMorePosts()
        this.getAuthor()
        fetchPost(this.postId)
            .then(post => this.setState({ post: post }))

    }
    getAuthor() {
        fetchAuthor(this.authorId)
            .then(author => this.setState({ author: author }))

    }

    getMorePosts() {
        fetchMorePosts(this.userId)
            .then(morePost => this.setState({ morePost: morePost }))
    }

    render() {
        if (!this.state.post || !this.state.author) {
            return <h2>Loading...</h2>;
        }



        return (<div className="main-div">
            <ul className="ul-posts">
                <h2>SINGLE POST TITLE</h2>
                <h3 className="postTitle"><Link to={`/author/${this.state.author.id}`}>{this.state.author.name}</Link></h3>
                <h2>{this.state.post.title}</h2>
                <div>
                    <MorePosts more={this.state.morePost} />
                </div>
            </ul>
        </div>)
    }
}


export default SinglePosts
