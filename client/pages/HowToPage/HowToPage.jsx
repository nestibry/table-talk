import Card from "react-bootstrap/Card";
import "./HowToPage.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

export default function HowToPage() {
  const [refStepOne, inViewStepOne] = useInView({
    triggerOnce: true,
  });
  //set up for 3 sec intervals
  const [refStepTwo, inViewStepTwo] = useInView({
    triggerOnce: true,
    delay: 3000,
  });

  const [refStepThree, inViewStepThree] = useInView({
    triggerOnce: true,
    delay: 6000,
  });
  const [refStepFour, inViewStepFour] = useInView({
    triggerOnce: true,
    delay: 9000,
  });
  return (
    <>
      <main className="how">
      <h1 className="howto">Start TableTalking Today!</h1>
      <br />
        
          <Card
            ref={refStepOne}
            className={`animated-card ${inViewStepOne ? "in-view" : ""}`}
          >
            <Card.Body className="stepOne">
              <Card.Text>
                <h2>Step 1</h2>
                Sign up today by completing a quick profile.
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
          <Card
            ref={refStepTwo}
            className={`animated-card ${inViewStepTwo ? "in-view" : ""}`}
          >
            <Card.Body className="stepTwo">
              <Card.Text>
                <h2>Step 2</h2>
                Pick a status- Are you seeking new friends, a love connection,
                or just here to find true food love!
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
       
          <Card
            ref={refStepThree}
            className={`animated-card ${inViewStepThree ? "in-view" : ""}`}
          >
            <Card.Body className="stepThree">
              <Card.Text>
                <h2>Step 3</h2>
                Once your profile is complete, start browsing the news feed for
                new connections to people or food!
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
          <br />
          <Card
            ref={refStepFour}
            className={`animated-card ${inViewStepFour ? "in-view" : ""}`}
          >
            <Card.Body className="stepFour">
              <Card.Text>
                <h2>Step 4</h2>
                Make your first food post and start building your TableTalk
                network!
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </Card>
        
        <br />

        <div className="d-grid gap-2">
          <Button variant="secondary" size="lg">
            Sing Up Now and Start TableTalking!
          </Button>
        </div>
      </main>
    </>
  );
}
