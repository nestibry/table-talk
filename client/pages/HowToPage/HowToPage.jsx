import Card from 'react-bootstrap/Card';
import './HowToPage.css';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Button from 'react-bootstrap/Button';

export default function HowToPage(){
  const [refStepOne, inViewStepOne] = useInView({
    triggerOnce: true,
  });

  const [refStepTwo, inViewStepTwo] = useInView({
    triggerOnce: true,
    delay: 2000, 
  });

  const [refStepThree, inViewStepThree] = useInView({
    triggerOnce: true,
    delay: 4000, 
  });
  const [refStepFour, inViewStepFour] = useInView({
    triggerOnce: true,
    delay: 6000, 
  });
    return (
      <>
        <h1>Get TableTalking Today!</h1>
        <Card ref={refStepOne} className={`animated-card ${inViewStepOne ? 'in-view' : ''}`}>
        <Card.Body className='stepOne'>
          <Card.Text>
            <h2>Step 1</h2>
            Sign up today by completing a quick profile.
          </Card.Text>
        </Card.Body>
           {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
      </Card>
      <br />
      <Card ref={refStepTwo} className={`animated-card ${inViewStepTwo ? 'in-view' : ''}`}>
        <Card.Body className='stepTwo'>
          <Card.Text>
            <h2>Step 2</h2>
            Pick a status- Are you seeking new friends, a love connection, or just here to find true food love!
          </Card.Text>
        </Card.Body>
           {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
      </Card>
      <br />
      <Card ref={refStepThree} className={`animated-card ${inViewStepThree ? 'in-view' : ''}`}>
        <Card.Body className='stepThree'>
          <Card.Text>
            <h2>Step 3</h2>
            Once your profile is complete, start browsing the news feed for new connections to people or food!
          </Card.Text>
        </Card.Body>
           {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
      </Card>
      <br />
      <Card ref={refStepFour} className={`animated-card ${inViewStepFour ? 'in-view' : ''}`}>
        <Card.Body className='stepFour'>
          <Card.Text>
            <h2>Step 4</h2>
            Make your first food post and start building your TableTalk network!
          </Card.Text>
        </Card.Body>
           {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}
      </Card>
      <div className="d-grid gap-2">

      <Button variant="secondary" size="lg">
        Sing Up Now and Start TableTalking!
      </Button>
    </div>


       </>
     

    )
  }