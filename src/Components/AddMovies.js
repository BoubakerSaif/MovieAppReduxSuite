import { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Modal, Button, Form } from "react-bootstrap/";
import { addMovie } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";

const AddMovies = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  // Listening to user input
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const AddingMovie = () => {
    dispatch(addMovie(newMovie));
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="title"
                placeholder="Movie Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleChange}
                type="text"
                name="description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                name="posterURL"
                placeholder="Poster URL"
              />
            </Form.Group>
            <Typography component="legend">Movie Rating</Typography>
            <Rating
              name="simple-controlled"
              max={10}
              defaultValue={0}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddingMovie}>
            Add New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovies;
