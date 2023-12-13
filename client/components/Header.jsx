import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAppCtx } from "../utils/AppProvider";
import TTlogo from '/assets/TableTalk.png';
import Home from '/images/house.png';
import Search from '/images/search.png';
import Profile from '/images/profile.png';
// import AddPost from '/images/Add.png';
// import Logout from '/images/logout.png';
// import Login from '/images/login.png';
// import Signup from '/images/signup.png';



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
                            <span style={{ color: "#FFA6D7", fontWeight: "bolder" }}>Table</span>
                            <span style={{ color: "#C24646", fontWeight: "bolder" }}>Talk</span>
                        </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav className="" style={{ color: "#070808" }}>

                            {user?._id !== undefined ? (
                                <>
                                    <Nav.Link href="/feed" style={{ color: "#070808", }}>
                                        <img src={Home} alt='feed' style={{ height: "50px", width: "50px" }}></img>
                                    </Nav.Link>
                                    <Nav.Link href="/search" style={{ color: "#070808" }}>
                                        <img src={Search} alt='search' style={{ height: "50px", width: "50px" }}></img>
                                    </Nav.Link>
                                    <Nav.Link href="/userprofile" style={{ color: "#070808" }}>
                                        <img src={Profile} alt='user profile' style={{ height: "50px", width: "50px" }}></img>
                                    </Nav.Link>
                                    <Nav.Link href="/post" style={{ color: "#070808", fontSize: "25px" }}>Post</Nav.Link>
                                    <Nav.Link href="/logout" style={{ color: "#070808", fontSize: "25px" }}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/signup" style={{ color: "#070808" }}>
                                        <img src={Profile} alt='user signup' style={{ height: "50px", width: "50px" }}></img>
                                    </Nav.Link>
                                    <Nav.Link href="/signup" style={{ color: "#070808", fontSize: "25px" }}>Sign Up</Nav.Link>
                                    <Nav.Link href="/auth" style={{ color: "#070808", fontSize: "25px" }}>Login</Nav.Link>
                                </>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}