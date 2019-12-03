import React from 'react'

const Header = (props) => {

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Bit <span class="blogone">BLOG</span></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li class="navbarli">Home</li>
                    <li class="navbarli">Authors</li>
                    <li class="navbarli">About</li>
                </ul>
            </div>
        </nav>

    )
}

export default Header