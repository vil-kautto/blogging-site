import React from 'react';
import './Blog.css'
//import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
}));



const EditPopup = (props) => {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  //const { onClose, open } = props;
  const [blogData, setBlogData] = React.useState({
    blogTitle: props.blogTitle,
    blogText: props.blogText,
  })

  console.log("http://localhost:8080/blogs/" + props.blogId);

  const handleClose = () => {
    props.onClose();
  }

  const postEditedBlog = () => {
    console.log("Adding a new Blog");
    console.log("Blog's title: " + blogData.blogTitle);
    console.log("Blog's text contents: " + blogData.blogText);

    const url = "http://localhost:8080/blogs/" + props.blogId;
    const data = { title: blogData.blogTitle, body: blogData.blogText }
  
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => console.log("Success"))
    .catch(error => console.error("Error " + error))
  
    handleClose();
  }

   const handleConfirm = () => {
    postEditedBlog();
  }

  return (
    <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="edit-popup-title">Edit Blog</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit your blog's name and contents.</DialogContentText>
        <div className={classes.root}>
          <TextField
            id="editFieldTitle"
            label="Title"
            multiline
            rowsMax={1}
            defaultValue={props.blogTitle}
            onChange={(event) => setBlogData({ ...blogData, blogTitle: event.target.value })}
            variant="outlined"
            fullWidth
            />
          <TextField
            id="editFieldBody"
            label="Blog Contents"
            multiline
            rows={12}
            defaultValue={props.blogText}
            onChange={(event) => setBlogData({ ...blogData, blogText: event.target.value })}
            variant="outlined"
            fullWidth
            />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">
          Cancel
                </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          OK
                </Button>
      </DialogActions>
    </Dialog>
  );


}

/* EditPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}; */

const Blog = (props) => {
  console.log("Opened blog with id: " + props.title);
  const [open, setOpen] = React.useState(false);
  //const []

  const handleClickOpen = () => {
    console.log("handleClickOpen");
    setOpen(true);
  }

  const handleClose = () => {
    console.log("handleClose")
    setOpen(false);
  }

  const editBlog = () => {
    console.log("Editing blog with id: " + props.title);

  }

  const deleteBlog = () => {
    console.log("Deleting blog with id: " + props.id);

    fetch("http://localhost:8080/blogs/" + props.id, {
      method: "DELETE",
    })
      .then(res => res.text())
      .then(res => console.log("Success"))
      .then(removeFromUI)
  }

  const removeFromUI = () => {
    console.log("removing blog with id: " + props.id)
    const blog = document.getElementById(props.id)
    blog.remove()
  }

  return (
    <div className="blog" id={props.id}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Created by Admin on {props.datetime}</p>
      <Button className="blog_button_edit" onClick={handleClickOpen} color="primary" variant="contained">Edit</Button>
      <EditPopup open={open} onClose={handleClose} blogTitle={props.title} blogText={props.body} blogId={props.id} />
      <Button className="blog_button_delete" onClick={deleteBlog} color="secondary" variant="contained">Delete</Button>
    </div>
  );


}

export default Blog;
