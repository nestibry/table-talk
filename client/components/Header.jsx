import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAppCtx } from "../utils/AppProvider";
import TTlogo from "/assets/TableTalk.png";
import HomeIcon from "/images/house.png";
import SearchIcon from "/images/search.png";
import ProfileIcon from "/images/profile.png";
import AddPostIcon from "/images/add.png";
import LogoutIcon from "/images/logout.png";
import LoginIcon from "/images/login.png";
import SignupIcon from "/images/signup.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default function Header() {
  const { user } = useAppCtx();

  return (
    <>
      <Navbar className="display-flex mx-auto">
        <Container fluid
          style={{ backgroundColor: "white", paddingTop: "5px" }}
        >
          <Navbar.Brand href="/">
          <Row>
              <Col>
                <img src={TTlogo} alt="TTlogo" style={{paddingLeft: "30px"}} />
              </Col>
              <Col>
                <h1 style={{paddingTop: "30px"}}>
                  <span style={{ color: "#FFA6D7", fontWeight: "bolder" }}>
                    Table
                  </span>
                  <span style={{ color: "#C24646", fontWeight: "bolder" }}>
                    Talk
                  </span>
                </h1>
              </Col>
            </Row>
            {/* <img src={TTlogo} alt="TTlogo"></img>
            <h1>
              {" "}
              <span style={{ color: "#FFA6D7", fontWeight: "bolder" }}>
                Table
              </span>
              <span style={{ color: "#C24646", fontWeight: "bolder" }}>
                Talk
              </span>
            </h1> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="" style={{ color: "#070808" }}>
              {user?._id !== undefined ? (
                <>
                  <Nav.Link href="/feed" style={{ color: "#070808" }}>
                    <img
                      src={HomeIcon}
                      alt="feed"
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#C24646",
                      }}
                    ></img>
                  </Nav.Link>

                  <Nav.Link href="/userprofile" style={{ color: "#070808" }}>
                    <img
                      src={ProfileIcon}
                      alt="user profile"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Nav.Link>
                  <Nav.Link href="/post" style={{ color: "#070808" }}>
                    <img
                      src={AddPostIcon}
                      alt="create a post"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Nav.Link>

                  <Nav.Link href="/search" style={{ color: "#070808" }}>
                    <img
                      src={SearchIcon}
                      alt="search"
                      style={{
                        height: "50px",
                        width: "50px",
                        color: "#C24646",
                      }}
                    ></img>
                  </Nav.Link>

                  <Nav.Link href="/logout" style={{ color: "#070808" }}>
                    <img
                      src={LogoutIcon}
                      alt="logout"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/signup" style={{ color: "#070808" }}>
                    <img
                      src={SignupIcon}
                      alt="signup"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Nav.Link>
                  <Nav.Link href="/auth" style={{ color: "#070808" }}>
                    <img
                      src={LoginIcon}
                      alt="login"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
