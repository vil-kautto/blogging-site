import React from 'react';
import './Toolbar.css'
import Button from '@material-ui/core/Button';

class Toolbar extends React.Component {

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
    .then(res => console.log("Success: " + res))
    .catch(error => console.error("Error " + error))
  }

  render() {
    return (
      <div className="toolbar">
        <nav className="toolbar-nav">
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

export default Toolbar;
