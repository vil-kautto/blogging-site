import React from 'react';
import './NavBar.css'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Popup from '../Popup/Popup'

class NavBar extends React.Component {

  newBlog() {
    console.log("Adding a new Blank Blog");
    
    const data = { title:'Empty Title', body:'Empty blog with no text.' }

    fetch("http://localhost:8080/blogs/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => console.log("Success"))
    .catch(error => console.error("Error " + error))
  }

  render() {
    return (
      <div className="navbar">
        <nav className="navbar-nav">
          <ul>
            <li>
              <a href="">Browse Blogposts</a>
            </li>
            <li>
              <a className="newBlogButton" onClick={this.newBlog}>Create new empty blogpost</a>
            </li>
            <li>
              <form className="search-form">
                <input className="search-bar" type="text"/>
                <Button variant="contained" color="primary">
                  Search
                </Button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
