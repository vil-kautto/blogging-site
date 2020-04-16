import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="outlined">The TemporaryBlog</h1>
                <h3 className="outlined">Nonsense about nothing and everything simultainiously</h3>
            </div>
        );
    }
}

export default Header;
