import Card from 'react-bootstrap/Card';


export default function HowToPage(){

    return (
      <>
        <h1>How to Page</h1>
        <p>Step 1</p>
        <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
      </>
    )
  }