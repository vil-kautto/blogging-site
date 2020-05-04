import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  state = {
    blogs: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/blogs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ blogs: data })
      console.log(this.state.blogs)
    })
    .catch(console.log)
  }

  render() {
    const blogs = this.state.blogs.map(blog => <Blog key={blog.id} id={blog.id} title={blog.title} body={blog.body} datetime={blog.datetime} comments={blog.comments} />)
    console.log(blogs)
    return (
      <div className="app">
        <NavBar/>
        <Header/>
        <div className="blogs">
          {blogs}
        </div>
        <Footer/>
       </div>
    );
  }
}

export default App;
