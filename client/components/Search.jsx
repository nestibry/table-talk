import { Avatar } from "@mui/material";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Search(props) {


  return (
    <>

      <Container>
        <Col className="mt-4" md={{ span: 4, offset: 4 }}>
          <Card bg="secondary">
            <Card.Body>
              <Row>
                <Col md={{ span: 3, offset: 2 }} className="d-flex align-items-center">
                  <Avatar alt="User Profile Pic" src={props.profile_pic} sx={{ bgcolor: "ffffff" }}></Avatar>
                </Col>
                <Col>
                  <p>{props.display_name}</p>
                  <p>{props.status}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
}
