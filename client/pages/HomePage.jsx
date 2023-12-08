import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Auth } from '../components';


export default function HomePage(){

  return (
    <>
      <h1>Home Page</h1>
      <p>The home page can be accessed by everyone.</p>
      <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    <Auth />
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
    <div className="mb-2">
        <Button variant="primary" size="lg">
          Sign Up
        </Button>{' '}
        <Button variant="secondary" size="lg">
          How it Works
        </Button>
      </div>

    </>
  )
};