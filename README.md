# Bit_Blog




// import Author from '../model/Author'

// const fetchAuthor = (authorId) => {
//     const url = "https://jsonplaceholder.typicode.com/users/" + authorId

//     return (fetch(url)
//         .then(res => res.json())
//         .then(authorData => {
//             return new Author(authorData)
//         }))


// }

// export { fetchAuthor }


import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../../service/PostService'
import { fetchAuthor } from '../../../service/AuthorService'


class SinglePosts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            post: null,
            author: null

        }

    }

    componentDidMount() {

        fetchPost(this.props.match.params.id)
            .then(post => {
                this.getAuthor(post.userID)

                this.setState({ post: post })

            })
    }
    getAuthor(authorId) {
        fetchAuthor(authorId)
            .then(author => this.setState({ author: author }))

    }

    render() {
        console.log(this.state.author);
        console.log(this.state.post);

        if (!this.state.post || !this.state.author) {
            return <h2>Loading...</h2>;
        }

        return (<div className="main-div">
            <ul className="ul-posts">
                <h2>SINGLE POST TITLE</h2>
                <h3 className="postTitle"><Link to={`/author/${this.state.author.id}`}>{this.state.author.name}</Link></h3>
                <h2>{this.state.post.title}</h2>
            </ul>
        </div>)
    }
}

export default SinglePosts
