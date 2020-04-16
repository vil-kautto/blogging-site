import React from 'react';
import './Toolbar.css'

const Toolbar = (props) => {

    return (
        <div className="toolbar">
            <nav className="toolbar-nav">
                <ul>
                    <li>
                        <a href="/">Browse Blogposts</a>
                    </li>
                    <li>
                        <a href="/">Add Blogpost</a>
                    </li>
                    <li>
                        <form className="search-form">
                            <input className="search-bar" type="text"/>
                            <button className="search-button" type="submit">
                                Search
                            </button>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Toolbar;
