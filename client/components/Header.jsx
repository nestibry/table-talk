import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppCtx } from "../utils/AppProvider"
import TTlogo from "../public/src/assets/TableTalk.png"

export default function Header() {
  const { user } = useAppCtx()

  return (
    <div>
      <a href='https://github.com/lavollmer/songquest'><img src={TTlogo} alt='TT' width="100" height='100'></img></a>
      <h2>TableTalk</h2>
      { user?._id !== undefined ? (
      <Nav.Link href="/logout">Logout</Nav.Link>
      ):(
      <Nav.Link href="/auth">Login</Nav.Link>
      )
      }
    </div>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="/">My Web Site</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
            
    //         { user?._id !== undefined && (
    //           <Nav.Link href="/private">Private Page</Nav.Link>
    //         )}

    //         { user?._id !== undefined ? (
    //           <Nav.Link href="/logout">Logout</Nav.Link>
    //         ):(
    //           <Nav.Link href="/auth">Login</Nav.Link>
    //         )}
            
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}
