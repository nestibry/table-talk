import Card from "react-bootstrap/Card";
import "./HowToPage.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';



export default function HowToPage() {
  const [refStepOne, inViewStepOne] = useInView({
    triggerOnce: true,
  });
  //set up for 3 sec intervals
  const [refStepTwo, inViewStepTwo] = useInView({
    triggerOnce: true,
    delay: 2000,
  });

  const [refStepThree, inViewStepThree] = useInView({
    triggerOnce: true,
    delay: 6000,
  });
  const [refStepFour, inViewStepFour] = useInView({
    triggerOnce: true,
    delay: 8000,
  });
  return (
    <>
      <main className="how" >
      <h1 className="howto">Start {" "}
  <span style={{ color: "#FFA6D7", fontStyle:"italic"  }}>Table</span>
  <span style={{ color: "#C24646", fontStyle:"italic"  }}>Talking</span> Today!</h1>
      <br />
        
          <Card style={{border: "none"}}
           
            ref={refStepOne}
            className={`animated-card ${inViewStepOne ? "in-view" : ""}`}
            animate={{ opacity: 1 }}
          >
            <Card.Body className="stepOne" >
              <Card.Text>
                <h2>Step 1</h2>
                <p> Sign up today by completing a quick profile.</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
          <Card style={{border: "none"}}
            ref={refStepTwo}
            className={`animated-card ${inViewStepTwo ? "in-view" : ""}`}
          >
            <Card.Body className="stepTwo">
              <Card.Text>
                <h2>Step 2</h2>
                <p >Pick a status- Are you seeking new friends, a love connection, or just here to find true food love!</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
       
          <Card style={{border: "none"}}
            ref={refStepThree}
            className={`animated-card ${inViewStepThree ? "in-view" : ""}`}
          >
            <Card.Body className="stepThree">
              <Card.Text>
                <h2>Step 3</h2>
                <p>Once your profile is complete, start browsing the news feed for
                new connections to people or food!</p>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
          <Card style={{border: "none"}}
            ref={refStepFour}
            className={`animated-card ${inViewStepFour ? "in-view" : ""}`}
          >
            <Card.Body className="stepFour">
              <Card.Text>
                <h2>Step 4</h2>
                <p>Make your first food post and start building your TableTalk
                network!</p>
                <Button as={Link} to="/CreateProfile" variant="secondary" size="lg" style={{backgroundColor: "whitesmoke", color: "#070808", fontWeight: "bolder", alignContent: "center"}}>
            Sign Up Now and Start TableTalking!
          </Button>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
        
        <br />

    
      </main>
    </>
  );
}
