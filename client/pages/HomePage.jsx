import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function HomePage(){

  return (
    <>
      <h1>Home Page</h1>
      <p>The home page can be accessed by everyone.</p>
      <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
    <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{' '}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>

    </>
  )
};