import React from 'react';
import './Blog.css'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const EditPopup = (props) => {
    //const [open, setOpen] = React.useState(false);
    const { onClose, open } = props;

    

    const handleClose = () => {
        onClose();
    }

    const handleConfirm = () => {
        onClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="edit-popup-title">Edit Blog</DialogTitle>
            <DialogContent>
                <DialogContentText>Edit your blog's name and contents.</DialogContentText>
                <TextField/>
                <TextField/>
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

EditPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Blog = (props) => {
    const [open, setOpen] = React.useState(false);
    //const []

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleCLose = () => {
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
            <EditPopup open={open} onClose={handleCLose} />
            <Button className="blog_button_delete" onClick={deleteBlog} color="secondary" variant="contained">Delete</Button>
        </div>
    );

    
}

export default Blog;
