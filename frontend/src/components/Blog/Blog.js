import React from 'react';
import './Blog.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { makeStyles } from '@material-ui/core/styles'

/**
 * EditPopUp's styling component
 */
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: '10px',
    },
  },
}));


/**
 * EditPopUp handles blog editing events and submits edited data to a database
 */ 
const EditPopup = (props) => {
  const classes = useStyles();

  const [blogData, setBlogData] = React.useState({
    blogTitle: props.blogTitle,
    blogText: props.blogText,
  })

  console.log("http://localhost:8080/blogs/" + props.blogId);

  /**
   * Handles events related to closing the editing window
   */
  const handleCloseEdit = () => {
    props.onCloseEdit();
  }

  /**
   * postEditedBlog is called once the user has submitted data for blog
   */
  const postEditedBlog = () => {
    console.log("Editing a blog");
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
    .then(res => console.log(res))
    .catch(error => console.error("Error " + error))
  
    handleCloseEdit();
  }

  /**
   * HandleConfirm submits the entered data to backend and refreshes the site after confirming
   */
  const handleConfirmEdit = () => {
    postEditedBlog();
    setTimeout(() => window.location.reload(), 200);
  }

  /**
   * Blog's editing window's structure
   */
  return (
    <Dialog open={props.openEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
      <DialogTitle id="edit-popup-title">Edit a Blog</DialogTitle>
      <DialogContent>
        <DialogContentText>Edit Selected blog's name and contents.</DialogContentText>
        <div className={classes.root}>
          <TextField
            id="editFieldTitle"
            label="Title"
            multiline
            defaultValue={props.blogTitle}
            onChange={(event) => setBlogData({ ...blogData, blogTitle: event.target.value })}
            variant="outlined"
            fullWidth
            inputProps={{maxLength: 100}}
            />
          <TextField
            id="editFieldBody"
            label="Blog Contents"
            multiline
            rows={5}
            defaultValue={props.blogText}
            onChange={(event) => setBlogData({ ...blogData, blogText: event.target.value })}
            variant="outlined"
            fullWidth
            inputProps={{maxLength: 2000}}
            />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmEdit} variant="contained" color="primary">
          <b>OK</b>
        </Button>
        <Button onClick={handleCloseEdit} variant="contained">
          Cancel
        </Button>
        
      </DialogActions>
    </Dialog>
  );


}

/**
 * Blog contains information about the blog objects and handles delete and edit events related to these blogs
 */
const Blog = (props) => {
  console.log("Opened blog with id: " + props.title);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  /**
   * handles edit window's opening
   */
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  }

  /**
   * handles delete confirmation window's opening
   */
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  }

  /**
   * handles edit window's closing
   */
  const handleCloseEdit = () => {
    setOpenEdit(false);
  }

  /**
   * handles delete confirmation window's closing
   */
  const handleCloseDelete = () => {
    setOpenDelete(false);
  }

  /**
   * deleteblog sends delete requests to the blog database
   * Removes blogs from the site after sending a remove request
   */
  const deleteBlog = () => {
    console.log("Deleting blog with id: " + props.id);

    fetch("http://localhost:8080/blogs/" + props.id, {
      method: "DELETE",
    })
      .then(res => res.text())
      .then(res => console.log(res))
      .then(removeFromUI)

      handleCloseDelete();
  }

   /**
   * removeFromUI removes blog items from the site after the user has sent a delete request
   */
  const removeFromUI = () => {
    console.log("removing blog with id: " + props.id)
    const blog = document.getElementById(props.id)
    blog.remove()
  }

  /**
   * Blog item structure
   */
  return (
    <div className="blog" id={props.id}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>Published by Admin, {props.datetime}</p>
      <Button className="blog_button_edit" onClick={handleClickOpenEdit} color="primary" variant="contained">Edit</Button>
      <EditPopup openEdit={openEdit} onCloseEdit={handleCloseEdit} blogTitle={props.title} blogText={props.body} blogId={props.id} />
      <Button className="blog_button_delete" onClick={handleClickOpenDelete} color="secondary" variant="contained">Delete</Button>
      {/*Delete confirmation Alert*/}
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle id="deleteAlertTitle">Warning!</DialogTitle>
        <DialogContent>
          <DialogContentText id="deleteAlertDescription">
            Are you sure you want to delete blog: {props.title}?
            <br/>
            When deleted all data of the blog will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} variant="contained" color={"primary"}>
            <b>Cancel</b>
          </Button>
          <Button onClick={deleteBlog} variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Blog;
