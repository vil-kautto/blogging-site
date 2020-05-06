import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup() {
  const [open, setOpen] = React.useState(false);

  const [blogData, setBlogData] = React.useState({
    blogTitle: '',
    blogText: '',
  });

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setBlogData({
      blogTitle: '',
      blogText: '',
    });

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    newBlog();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create a blog
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
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            value={blogData.blogText}
            onChange={(event) => setBlogData({ ...blogData, blogText: event.target.value })}
            label="Text"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Publish
          </Button>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}