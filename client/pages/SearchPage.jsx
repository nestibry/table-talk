import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';


export default function SearchPage() {
  const [status, setStatus] = useState('Default Status');

  const handleButtonClick = () => {
    setStatus((prevStatus) => (prevStatus === 'Active' ? 'Inactive' : 'Active'));
  };
  return (
    <>
      <h1>Search for TableTalkers</h1>
      <p>Search by Following</p>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Filter By"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Following</Dropdown.Item>
          <Dropdown.Item href="#">Not Following</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>
<p> Or search by Username</p>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      <container className="searchResults">
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>Username</ListGroup.Item>
          <ListGroup.Item>Status</ListGroup.Item>
          <ListGroup.Item>Following Status: {status}</ListGroup.Item>
        </ListGroup>
        <Button onClick={handleButtonClick}>Change Status</Button>
      </Card>
    </container>
    </>
  );
}
