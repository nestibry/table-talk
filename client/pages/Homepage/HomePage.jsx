import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Auth } from '../../components';
import './HomePage.css';
import dinnerdate from '../../public/images/dinnerdate.png'

export default function HomePage(){

  return (
    <>
      <h1>Welcome to <span style={{color: '#FFA6D7', fontStyle: 'italic' }}>TableTalk</span></h1>
      <p> -Where your <span style= {{color: '#C24646'}}>LOVE</span>  for great <span style= {{color:'#F5BE27'}}>FOOD</span> meets the joy of new <span style= {{color:'#F57C36'}}>CONNECTIONS</span> </p>
      <Card className='homeCard'>
      <Card.Body>Want to spice up your social life? Our app is designed for food enthusiasts seeking both delicious meals and meaningful connections. Discover must-try restaurants, swipe through profiles of like-minded individuals, and turn every bite into an opportunity for romance or friendship. Say goodbye to dining alone; join TableTalk for a tasty adventure in food and connection!</Card.Body>
      <Row>
        <Col xs={6} md={4}>
          <Image src={dinnerdate} thumbnail />
        </Col>
      </Row>
      <div className="mb-2">
        <Button  className="signUp" variant="primary" size="lg">
          Sign Up
        </Button>{' '}
        <Button  className= "howBtn" variant="secondary" size="lg">
          How it Works
        </Button>
      </div>
    </Card>
    
    <Auth />
      <Container>

    </Container>


    </>
  )
};