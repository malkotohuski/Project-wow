import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <>
            <Navbar className='color-nav' bg="white" expand="lg">
                <Container>
                    <Link to="/" style={{color: "#111" }}><h1>Forge your Legacy</h1></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse  id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/login" style={{color: "#111"}}>Login</Link>
                            <Link to="/About" style={{color: "#111"}}>About</Link>
                            <Link to="/Contacts" style={{color: "#111"}}>Contacts</Link>
                            <NavDropdown style={{width: '30%', margin: '0 auto'}} title="Factions" id="basic-nav-dropdown">
                                <Link to="/Alliance" className='Alliance'>Alliance</Link>
                                <NavDropdown.Item className='Horde' href="#action/3.2">
                                    Horde
                                </NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
