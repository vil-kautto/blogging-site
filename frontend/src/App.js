import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import TextField from '@material-ui/core/TextField';

/**
 * Handles the search queries, returns all blogs that contain matching text in the title or body.
 * Returns all if no keywords are specified
 */
function searchFilter(keyword) {
  return function(blog) {
    return blog.title.toLowerCase().includes(keyword.toLowerCase()) ||
      blog.body.toLowerCase().includes(keyword.toLowerCase()) || !keyword;
  }
}

/**
 * Contains all the components displayed on the website
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      keyword: ''
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  
  /**
   * Changes keyword's state based on the search bar's content
   * @param {*} event handles search bar's onChange events
   */
  searchHandler(event) {
    this.setState( {keyword: event.target.value})
  }

  /**
   * Fetches data from the database upon loading
   */
  componentDidMount() {
    fetch('http://localhost:8080/blogs')
    .then(res => res.json())
    .then((data) => {
      this.setState({ blogs: data })
      console.log(this.state.blogs)
    })
    .catch(console.log)
  }

  /**
   * Handles the site layout and creates blog objects to the site
   */
  render() {
    // Mapping blogs and all of their values
    const blogs = this.state.blogs.filter(searchFilter(this.state.keyword))
      .map(blog => <Blog key={blog.id} id={blog.id}title={blog.title} body={blog.body}
      datetime={blog.datetime} comments={blog.comments} />)
    console.log(blogs);

    /**
     * Site's object structure
     */
    return (
      <div className="app">
        <NavBar/>
        <Header/>
        <TextField
          className="searchbar"
          variant="outlined"
          type="text"
          label="Search for blogs"
          onChange={this.searchHandler} />
        <div className="blogs">
          {blogs}
        </div>
        <Footer/>
       </div>
    );
  }
}

export default App;
