import React from 'react'
import { Link } from 'react-router-dom'
import { fetchAuthors } from '../../../service/AuthorsService'


class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []

        }

    }

    componentDidMount() {
        fetchAuthors()
            .then(autori => {
                this.setState({ authors: autori })
                console.log(autori);

            })
    }
    render() {

        const filteredAuthors = this.state.authors.map(author => (


            <li>
                <h3 className="postTitle"><Link to={`/author/${author.id}`}>{author.name}</Link></h3>
            </li >

        ))



        return (
            <div className="main-div">
                <div class="knockout">Authors</div>
                <ul className="ul-posts">
                    {filteredAuthors}
                </ul>
            </div>)
    }
}


export default Authors