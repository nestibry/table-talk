import Card from "react-bootstrap/Card";
import "./HowToPage.css";
import { useInView } from "react-intersection-observer";
import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCard = motion(Card);

export default function HowToPage() {
  const [refStepOne, inViewStepOne] = useInView({
    triggerOnce: true,
  });

  //set up for 3 sec intervals
  const [refStepTwo, inViewStepTwo] = useInView({
    triggerOnce: true,
    delay: 6000,
  });

  const [refStepThree, inViewStepThree] = useInView({
    triggerOnce: true,
    delay: 8000,
  });
  const [refStepFour, inViewStepFour] = useInView({
    triggerOnce: true,
    delay: 10000,
  });
  return (
    <>
      <main className="how">
        <h1 className="howto">
          Start{" "}
          <span style={{ color: "#FFA6D7", fontStyle: "italic" }}>Table</span>
          <span style={{ color: "#C24646", fontStyle: "italic" }}>
            Talking
          </span>{" "}
          Today!
        </h1>
        <br />
        <AnimatePresence>
          <AnimatedCard
            key="stepOne"
            style={{ border: "none" }}
            ref={refStepOne}
            className={`animated-card ${inViewStepOne ? "in-view" : ""}`}
            animate={{ opacity: 1 }}
          >
            <Card.Body className="stepOne">
              <Card.Text>
                Step 1 <br />
                Sign up today by completing a quick profile.
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </AnimatedCard>
        </AnimatePresence>
        <br />
        <AnimatePresence>
          <AnimatedCard
            key="stepTwo"
            style={{ border: "none" }}
            ref={refStepTwo}
            className={`animated-card ${inViewStepTwo ? "in-view" : ""}`}
          >
            <Card.Body className="stepTwo">
              <Card.Text>
                Step 2 <br />
                Pick a status- Are you seeking new friends, a love connection,
                or just here to find true food love!
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </AnimatedCard>
        </AnimatePresence>
        <br />

        <AnimatePresence>
          <AnimatedCard
            key="StepThree"
            style={{ border: "none" }}
            ref={refStepThree}
            className={`animated-card ${inViewStepThree ? "in-view" : ""}`}
          >
            <Card.Body className="stepThree">
              <Card.Text>
                Step 3 <br />
                Once your profile is complete, start browsing the news feed for
                new connections to people or food!
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </AnimatedCard>
        </AnimatePresence>
        <br />
        <AnimatePresence>
          <AnimatedCard
            key="stepFour"
            style={{ border: "none" }}
            ref={refStepFour}
            className={`animated-card ${inViewStepFour ? "in-view" : ""}`}
          >
            <Card.Body className="stepFour">
              <Card.Text>
                Step 4 <br />
                Make your first food post and start building your TableTalk
                network! <br />
                <Button
                  as={Link}
                  to="/signup"
                  variant="secondary"
                  size="lg"
                  style={{
                    backgroundColor: "whitesmoke",
                    color: "#070808",
                    fontWeight: "bolder",
                    alignContent: "center",
                  }}
                >
                  Sign Up Now and Start TableTalking!
                </Button>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
          </AnimatedCard>
        </AnimatePresence>

        <br />
      </main>
    </>
  );
}
