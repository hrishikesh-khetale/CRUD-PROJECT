import { Outlet, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import Footer from "./Footer";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Search value:", searchValue);
    navigate('/emp/' + searchValue);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">CRUD APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/ListEmp">List of Employee(Dot net)</Nav.Link>
              <Nav.Link href="/listempjava">List of Employee(Java)</Nav.Link>
              <Nav.Link href="/listempnode">List of Employee(NodeJs)</Nav.Link>
              <Nav.Link href="/AddEmp">Add Employee</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleFormSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value) }}
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer/>
    </>
  );
}
export default Header;