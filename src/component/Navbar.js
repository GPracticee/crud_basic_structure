import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import { destroyStorage } from '../constant/Constant';

export default function NavBar() {
  const navigate = useNavigate();
  function logout()
    {
        destroyStorage()
        navigate("/") 
    }
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand >CRUD APP</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {
                  localStorage.getItem('user-info') ?
                  <Nav.Link ><Link to="/dashboard">Dashboard</Link> </Nav.Link>:
                  <Nav.Link ><Link to="Signup">Signup</Link> </Nav.Link>

                }
                {/* <Nav.Link ><Link to="/">Home</Link> </Nav.Link>
                <Nav.Link ><Link to="Signup">Signup</Link> </Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                {
                  localStorage.getItem('user-info') ?
                  <Button variant="outline-danger mx-2 p-2" onClick={logout}>LOGOUT</Button>:""
                }
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}