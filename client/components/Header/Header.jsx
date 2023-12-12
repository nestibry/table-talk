import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAppCtx } from "../../utils/AppProvider"
import TTlogo from '/assets/TableTalk.png'



export default function Header() {
    const { user } = useAppCtx()

    return (
        <>
            <Navbar className="display-flex mx-auto">
        <Container className="" style={{ backgroundColor: "white", paddingTop: "5px" }}>
          <Navbar.Brand href="/">
            <img src={TTlogo} alt="TTlogo"></img>
            <h1>
              {" "}
              <span style={{ color: "#FFA6D7", fontWeight: "bolder"}}>Table</span>
              <span style={{ color: "#C24646",fontWeight: "bolder" }}>Talk</span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="" style={{color: "#070808"}}>
              {user?._id !== undefined ? (
                <Nav.Link href="/feed" style={{color: "#070808",fontSize:"25px"}}>Profile Page</Nav.Link>
              ) : (
                <Nav.Link href="/signup"style={{color: "#070808", fontSize:"25px"}}>Sign Up</Nav.Link>
              )}

              {user?._id !== undefined ? (
                <Nav.Link href="/logout"style={{color: "#070808", fontSize:"25px"}}>Logout</Nav.Link>
              ) : (
                <Nav.Link href="/auth"style={{color: "#070808", fontSize:"25px"}}>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    );
}