import React from 'react'
import { Link } from 'react-router-dom'



const Header = (props) => {

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Bit <span class="blogone">BLOG</span></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="navbarli"><Link to='/'>Home</Link></li>
                    <li class="navbarli"><Link to='/AuthorsListItem'>Authors</Link></li>
                    <li class="navbarli"><Link to='/About'>About</Link></li>
                </ul>
            </div>
        </nav>

    )
}

export default Header