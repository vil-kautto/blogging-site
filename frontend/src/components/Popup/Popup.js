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

  const newBlog = (title, body) => {
    console.log("Adding a new Blog");
    const data = { title:'title', body:'Empty blog with no text.' }

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    newBlog()
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create a blog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">create a new post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the following information to publish a blog
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Description"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
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