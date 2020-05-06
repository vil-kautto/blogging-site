import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// PopUp Creates an popup window, which is used upon creating a new blog
export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const [blogData, setBlogData] = React.useState({
    blogTitle: '',
    blogText: '',
  });

  // newBlog sends blog data to a database, in which a new blog object is created and displayed to the user on the website
  const newBlog = () => {
    console.log("Adding a new Blog");
    const data = { title: blogData.blogTitle, body: blogData.blogText }

    fetch("http://localhost:8080/blogs/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error("Error " + error))

    handleClose();
  }

  /**
   * Handles popup's opening
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Handles popup's closing
   */
  const handleClose = () => {
    setBlogData({
      blogTitle: '',
      blogText: '',
    });
    setOpen(false);
  };

  /**
   * Handles the submit event on the popUp window, refreshes the window a moment after submitting
   * @param {*} event 
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    newBlog();
    setTimeout(() => window.location.reload(), 200);
  };

  /**
   * Popup object's structure 
   */
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <b>Create a blog</b>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a new post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the following information to publish a blog
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={blogData.blogTitle}
            onChange={(event) => setBlogData({ ...blogData, blogTitle: event.target.value })}
            label="Title"
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={blogData.blogText}
            onChange={(event) => setBlogData({ ...blogData, blogText: event.target.value })}
            label="Text"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            <b>Publish</b>
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}