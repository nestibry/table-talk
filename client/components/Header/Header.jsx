import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppCtx } from "../../utils/AppProvider"
import TTlogo from '/assets/TableTalk.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './Header.css'


export default function Header() {
    const { user } = useAppCtx()

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container className=''>
                    <Navbar.Brand href="/">
                        <img src={TTlogo} alt='TTlogo'></img>
                        <h1>
                            TableTalk
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="">

                            {user?._id !== undefined ? (
                                <Nav.Link href="/feed">News Feed</Nav.Link>
                            ) : (
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            )}

                            {user?._id !== undefined ? (
                                <Nav.Link href="/logout">Logout</Nav.Link>
                            ) : (
                                <Nav.Link href="/auth">Login</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
