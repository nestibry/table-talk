import React from "react";
import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

//work in progress, still need to alter form fields


export default function CreateProfile() {
  const appCtx = useAppCtx();

  const [formData, setFormData] = useState({
    email: "",
    display_name: "",
    password: "",
    status: "",
    location_state: "",
    age: "",
    gender_identity: "",
    profile_pic: "",
  });

  const [userData, setUserData] = useState("");

  async function fetchUserData() {
    try {
      const response = await fetch("/api/user/65789b2d582835f850ee618a");
      const userData = await response.json();

      console.log(userData);

      setFormData({
        email: userData.payload.email,
        display_name: userData.payload.display_name,
        password: "",
        status: userData.payload.status,
        location_state: userData.payload.location_state,
        age: userData.payload.age,
        //do we still want age?
        gender_identity: userData.payload.gender_identity,
        //need to add in pronouns
        profile_pic: userData.payload.profile_pic,
      });
    } catch (error) {
      console.error("Error! ", error);
    }
  };

  useEffect(() => {
    // am I using the right api call?
    setUserData(appCtx.user);
    console.log(userData);
    fetchUserData();

  }, []);

  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form Updated", formData);

    try {
      const response = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        alert("Profile updated");
      } else {
        alert("Profile not updated.");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <>
      {/* 
            [x] email: '',
            [x] display_name: '',
            [x] password: '',

            [x] status: '' 
            [x] location_state: '',
            [x] age: '',
            gender_identity: '',
            profile_pic: '',
        */}
      <Form onSubmit={handleFormSubmit} onChange={handleFormChange}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            value={formData.email}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="display_name"
            placeholder="YourDisplayName"
            value={formData.display_name}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            //type should hide password unless user is editing
            // type={isEditingPassword ? "text" : "password"}
            type="text"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProfileStatus">
          <Form.Label>Profile Status</Form.Label>
          <Form.Select
            name="status"
            value={formData.status}
            onChange={handleFormChange}>
            <option>Select Status</option>
            <option value="1">Looking for new friends</option>
            <option value="2">Looking for a romantic connection</option>
            <option value="3">Just here for the food recommendations</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLocationState">
          <Form.Label>State</Form.Label>
          <Form.Select name="location_state"
            value={formData.location_state}
            onChange={handleFormChange}>
            <option value="">Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Select
            name="age"
            value={formData.age}
            onChange={handleFormChange}>
            <option>Select Age Range</option>
            <option value="1">18-25</option>
            <option value="2">26-35</option>
            <option value="3">26-45</option>
            <option value="4">46-60</option>
            <option value="5">60+</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Pronouns</Form.Label>
          <Form.Select
            name="gender"
            value={formData.gender_identity}
            onChange={handleFormChange}>
            <option>Select Pronoun</option>
            <option value="1">He/Him</option>
            <option value="2">She/Her</option>
            <option value="3">They/Them</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>
    </>
  );
}
