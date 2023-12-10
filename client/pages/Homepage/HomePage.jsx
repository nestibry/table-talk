import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Auth } from '../../components';
import dinnerdate from '/images/dinnerdate.png';
import './HomePage.css';

export default function HomePage(){

  return (
    <>


   
      <h1>Welcome to <span style={{color: '#FFA6D7', fontStyle: 'italic' }}>TableTalk</span></h1><br />

      <h2>
        Where Your <span style={{ color: '#C24646', fontWeight: '900' }}>LOVE</span> <br />
        For Great <span style={{ color: '#F5BE27', fontWeight: '900' }}>FOOD</span> <br />
        Meets the Joy of New <span style={{ color: '#F57C36', fontWeight: '900' }}>CONNECTIONS</span>
      </h2>
      <br />
      <Card className='homeCard'>
      <Card.Body >
        <Row>
        <Col xs={12} md={6}>
          <p>Want to spice up your social life? Our app is designed for food enthusiasts seeking both delicious meals and meaningful connections. Discover must-try restaurants, swipe through profiles of like-minded individuals, and turn every bite into an opportunity for romance or friendship. Say goodbye to dining alone; join TableTalk for a tasty adventure in food and connection!
            </p>
        </Col>
        <Col xs={12} md={6} className='d-flex flex-column align-items-center'>
          <Image className="dinnerImg" src={dinnerdate} thumbnail />
          <div className="mb-2 ">
        <Button  className="signUp" variant="primary" size="lg">
          Sign Up
        </Button>{' '}
        <Button  className= "howBtn" variant="secondary" size="lg">
          How it Works
        </Button>
      </div>
        </Col>

        </Row>
   
   
        </Card.Body>
 
    

    </Card>
    <Container></Container>
    <Auth />


    </>
  )
};