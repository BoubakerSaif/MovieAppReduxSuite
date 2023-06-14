import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { UpdateMovie, deleteMovie } from "../Redux/movieSlice";
import { Button as BTN, Modal, Form } from "react-bootstrap/";

const MovieCard = ({ movieInfo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const initialState = {
    id: movieInfo.id,
    title: movieInfo.title,
    description: movieInfo.description,
    posterURL: movieInfo.posterURL,
    rating: movieInfo.rating,
  };

  const [updatedMovie, setUpdatedMovie] = useState(initialState);
  const handleChange = (e) => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };

  const UpdateHandler = () => {
    dispatch(UpdateMovie({ id: movieInfo.id, updatedMovie: updatedMovie }));
    handleClose();
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginBottom: "50px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          width="250"
          image={movieInfo.posterURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieInfo.description}
          </Typography>
          <br />
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteMovie(movieInfo.id));
          }}
        >
          Delete
        </Button>
        <Button variant="primary" onClick={handleShow}>
          UPDATE
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Movie Title"
                  autoFocus
                  defaultValue={movieInfo.title}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                  type="text"
                  name="description"
                  defaultValue={movieInfo.description}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  name="posterURL"
                  placeholder="Poster URL"
                  defaultValue={movieInfo.posterURL}
                />
              </Form.Group>
              <Typography component="legend">Movie Rating</Typography>
              <Rating
                name="simple-controlled"
                max={10}
                defaultValue={movieInfo.rating}
                onChange={(event, newValue) => {
                  setUpdatedMovie({ ...updatedMovie, rating: newValue });
                }}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <BTN variant="secondary" onClick={handleClose}>
              Close
            </BTN>
            <BTN variant="primary" onClick={UpdateHandler}>
              Update Movie
            </BTN>
          </Modal.Footer>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
