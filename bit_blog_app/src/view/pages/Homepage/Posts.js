import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPost } from '../../../service/PostService'

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
        return (<div className="main-div">
            <ul className="ul-posts">
                <li>

                    <h3><Link to='/post/'>{this.state.posts.title}</Link></h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipscing elit...</p>
                    <p> {this.state.posts.title}</p>
                </li>
            </ul>
        </div>)
    }
}




export default Posts