import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';



export default function SearchPage() {
  const userId = "65789b2d582835f850ee618a"
  const [data, setData] = useState([]);

  const [status, setStatus] = useState('Not Following');
  const [dropDownValue, setDropDownValue] = useState("Filter By: All Users")

  async function postInfo(searchCriteria, isFollowing) {
    const res = await fetch(`/api/user/search/${userId}`, {
      method: "POST",
      body: JSON.stringify({
        searchCriteria: searchCriteria,
        isFollowing: isFollowing
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const postData = await res.json()
    console.log(postData)
    setData(postData);
  }

  const handleButtonClick = () => {
    setStatus((prevStatus) => (prevStatus === 'Not Following' ? 'Following' : 'Not Following'));
  };

  function handleSearchBtnClick(e) {
    const filterByElem = document.querySelector("#filter-by");
    const searchInputElem = document.querySelector("#search-input");

    let isFollowing;

    if (filterByElem.textContent === "Filter By: Following Only") {
      isFollowing = true;
    } else if (filterByElem.textContent === "Filter By: All Users") {
      isFollowing = false
    }

    postInfo(searchInputElem.value, isFollowing);

    console.log(data);
    console.log(isFollowing)

    // console.log(e);
    // console.log(filterByElem.textContent);
    // console.log(searchInputElem.value);
  }

  function changeDropDownValue(e) {
    setDropDownValue("Filter By: " + e.target.textContent)
  }

  //need to add in filter by calls
  return (
    <>
      <h1>Search for TableTalkers</h1>
      {/* <p>Search by Following</p>
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
      </InputGroup> */}
      <p> Search by Username</p>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={dropDownValue}
          id="filter-by"
        >
          <Dropdown.Item as="button"><div onClick={changeDropDownValue}>All Users</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={changeDropDownValue}>Following Only</div></Dropdown.Item>
        </DropdownButton>
        <Form.Control
          placeholder="Search by Username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          id="search-input"
        />
        <Button variant="primary" id="button-addon2" onClick={handleSearchBtnClick}>
          Search
        </Button>
      </InputGroup>
      {/* { <div className="searchResults">
        { <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Username</ListGroup.Item>
            <ListGroup.Item>Status</ListGroup.Item>
            <ListGroup.Item>Friend: {status}</ListGroup.Item>
          </ListGroup>
          <Button onClick={handleButtonClick}>
            {status === 'Following' ? 'Unfollow' : 'Follow'}
          </Button>
        </Card> }
    </div > } */}
    </>
  );
}
