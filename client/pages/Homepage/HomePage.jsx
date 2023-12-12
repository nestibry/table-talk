import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Auth } from '..';
import dinnerdate from "/images/dinnerdate.png";
import { Link } from 'react-router-dom';

import "./HomePage.css";
import HowToPage from "../HowToPage/HowToPage";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
  <main className="home">
  <h1 className="welcome">
  Welcome to{" "}
  <span style={{ color: "#FFA6D7", fontStyle:"italic" }}>Table</span>
  <span style={{ color: "#C24646", fontStyle:"italic"  }}>Talk</span>
        </h1>
        <br />

        <motion.h2
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          Where Your{" "}
          <span style={{ color: "#C24646", fontWeight: "900" }}>LOVE</span>{" "}
          <br />
          For Great{" "}
          <span style={{ color: "#F5BE27", fontWeight: "900" }}>FOOD</span>{" "}
          <br />
          Meets the Joy of New{" "}
          <span style={{ color: "#F57C36", fontWeight: "900" }}>
            CONNECTIONS
          </span>
        </motion.h2>
        <br />
        
        <Card style={{border: "none", borderRadius: "15px", overflow: "hidden"}}>
          <Card.Body className="homecard" >
            <Row>
              <Col xs={12} md={7}>
                <p className="intro" style={{color:"#070808"}}> 
                  Want to spice up your social life? Our app is designed for
                  food enthusiasts seeking both delicious meals and meaningful
                  connections. <br />
                  <br />
                  Discover must-try restaurants, swipe through
                  profiles of like-minded individuals, and turn every bite into
                  an opportunity for romance or friendship. <br />
                  <br />Say goodbye to
                  dining alone; join TableTalk for a tasty adventure in food and
                  connection!
                </p>

              </Col>
              <Col
                xs={12}
                md={5}
                className="d-flex flex-column align-items-center"
              >
                <Image style={{backgroundColor: "transparent", border:"none", height:"80%", width:"80%", paddingTop: "10px" }} className="dinnerdate" src={dinnerdate} thumbnail />
                <br />
                <br />
                <div className="mb-2 " >
                  <Button as={Link} to="/signup" className="signUp" variant="primary" size="lg"
                  style={{marginRight: "20px", backgroundColor: "#C24646"}}>
                    Ready to Sign Up
                  </Button>{" "}
             
                  <ScrollLink to="howToPage" smooth duration={500} >
                    <Button className="howbtn" variant="light" size="lg" style={{backgroundColor: "#F5BE27"}}>
                      SeeHow it Works
                    </Button>
                  </ScrollLink>
  
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Container id="howToPage">
          <HowToPage />
        </Container>
        {/* <Auth /> */}
  </main>
        

    </>
  );
}
