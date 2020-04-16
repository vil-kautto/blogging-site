import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>The TemporaryBlog</h1>
                <h3>Nonsense about nothing and everything at the same time</h3>
            </div>
        );
    }
}

export default Header;
