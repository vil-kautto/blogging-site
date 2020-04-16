import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Blog from './components/Blog/Blog'

class App extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8080/blogs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ blogs: data })
      console.log(this.state.blogs)
    })
    .catch(console.log)
  }

  render() {
    const blogs = this.state.blogs.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} body={blog.body} datetime={blog.datetime} comments={blog.comments} />)
    return (
      <div className="app">
        <Toolbar/>
        <div className="blogs">
        {blogs}
        </div>
       </div>
    );
  }
}

export default App;
