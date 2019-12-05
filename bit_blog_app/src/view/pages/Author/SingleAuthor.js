import React from 'react'
import NameSurname from './NameSurname'
import Address from './Address'
import Company from './Company'
import { Link } from 'react-router-dom'
import { fetchAuthor } from '../../../service/AuthorService'



class SingleAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.authorId = this.props.match.params.id

        this.state = {
            jedanAutor: null
        }
    }

    componentDidMount() {
        fetchAuthor(this.authorId)
            .then(single => {
                this.setState({ jedanAutor: single })
                console.log(single);
            })
    }
    render() {

        if (!this.state.jedanAutor) {
            return <h2>Loading...</h2>;
        }
        return (
            <div>
                <p><Link to='/authors'>All authors</Link></p>
                <NameSurname this name={this.state.jedanAutor.name} username={this.state.jedanAutor.username} email={this.state.jedanAutor.email} phone={this.state.jedanAutor.phone} />
                <Address street={this.state.jedanAutor.street} city={this.state.jedanAutor.city} zip={this.state.jedanAutor.zip} latitude={this.state.jedanAutor.latitude} longitude={this.state.jedanAutor.longitude} />
                <Company companyName={this.state.jedanAutor.companyName} companySlogan={this.state.jedanAutor.companySlogan} />

            </div>

        )
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
