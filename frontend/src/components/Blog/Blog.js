import React from 'react';
import './Blog.css'

class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <h2>{this.props.title}</h2>
                <h3>Author {this.props.id}</h3>
                <p>{this.props.body}</p>
                <p>Created: {this.props.datetime}</p>
            </div>
        );
    }
    
}

export default Blog;
