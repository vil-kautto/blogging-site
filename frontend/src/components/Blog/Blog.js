import React from 'react';
import './Blog.css'

class Blog extends React.Component {
    edit = () => {
        console.log("Editing blog: " + this.props.title);
    }

    delete = () => {
        console.log("Deleting blog with id: " + this.props.id);

        fetch("http://localhost:8080/blogs/" + this.props.id, {
            method: "DELETE",
        })
        .then(res => res.text())
        .then(res => console.log(res));
    }

    render() {
        return (
            <div className="blog">
                <h2>{this.props.title}</h2>
                <h3>Author {this.props.id}</h3>
                <p>{this.props.body}</p>
                <p>Created: {this.props.datetime}</p>
                <button className="blog_button_edit" onClick={this.edit}>Edit</button>
                <button className="blog_button_delete" onClick={this.delete}>Delete</button>
            </div>
        );
    }
    
}

export default Blog;
