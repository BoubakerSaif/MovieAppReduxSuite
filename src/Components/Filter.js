import React from "react";
import { Container, Nav, Navbar, Button, Form } from "react-bootstrap/";
import Rating from "@mui/material/Rating";

const Filter = ({ setsearch, setrating }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyCollection</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">My Selection</Nav.Link>
          <Nav.Link href="#features">Best of</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setsearch(e.target.value)}
          />
          <Button variant="dark">Search</Button>
        </Form>
        <Rating
          name="simple-controlled"
          max={10}
          defaultValue={0}
          onChange={(event, newValue) => {
            setrating(newValue);
          }}
        />
      </Container>
    </Navbar>
  );
};

export default Filter;
