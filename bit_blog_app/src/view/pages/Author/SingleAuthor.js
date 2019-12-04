import React from 'react'
import NameSurname from './NameSurname'
import Address from './Address'
import Company from './Company'
import { Link } from 'react-router-dom'
import { fetchAuthor } from '../../../service/AuthorService'




class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            singleAuthor: []

        }

    }
    componentDidMount() {
        fetchAuthor()
            .then(jedanAutor => {
                this.setState({ singleAuthor: jedanAutor })
                console.log(jedanAutor);

            })
    }
    render() {

        // const filteredAuthor = this.state.singleAuthor.map(post => (
        //     <li>
        //         <h3 className="postTitle"><Link to={`/post/${post.titleID}`}>{post.title}</Link></h3>
        //         <p className="titleBody">{post.body}</p>

        //     </li>

        // ))



        return (<div className="main-div">
            <div>
                <p><Link to='/authors'>Single Author</Link></p>
                <NameSurname />

                <Address />
                <Company />

            </div>
        </div>)
    }
}


// const SingleAuthor = (props) => {

//     return (

//         <div>
//             <p><Link to='/authors'>All authors</Link></p>
//             <NameSurname />

//             <Address />
//             <Company />

//         </div>

//     )
// }

export default SingleAuthor
