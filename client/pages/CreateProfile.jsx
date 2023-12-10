import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export default function CreateProfile() {
  const [formData, setFormData] = useState({
    username: "",

    password: "",
    name: "",
    state: "",
    profileStatus: "",
    ageGroup: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    const newValue = type === "checkbox" ? checked : files ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("your-server-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Your profile has been created!!!");
      } else {
        console.error("Profile not created!");
      }
    } catch (error) {
      console.error("Error!!!!!", error);
    }
  };



  // Cloudinary config settings


  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("table-talk");
  // Replace with your own upload preset
  const [uploadPreset] = useState("wifavopf");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

  //End of Cloudinary config settings




  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter first name (last name optional)"
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

        <Row className="mb-3">
          {/* <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group> */}

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
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

          {/* <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group> */}
        </Row>
        {/* 
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Form.Select aria-label="Default select example">
          <option>Choose a Profile Status</option>
          <option value="1">Looking for new friends</option>
          <option value="2">Looking for a romantic connection</option>
          <option value="3">Just here for the food recommendations</option>
        </Form.Select>

        <Form.Select aria-label="Default select example">
          <option>Age</option>
          <option value="1">18-25</option>
          <option value="2">26-35</option>
          <option value="3">36-45</option>
          <option value="4">46-60</option>
          <option value="5">60+</option>
        </Form.Select>

        {/* <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload a profile pict</Form.Label>
            <Form.Control type="file" />
          </Form.Group> */}



        {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I am over 18 years of age." />
          </Form.Group> */}

        <Button variant="primary" type="submit">
          Create Profile
        </Button>
      </Form>

      <div>
        <h3>Cloudinary Upload Widget Example</h3>
        <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget"
            target="_blank"
          >
            Upload Widget User Guide
          </a>
        </p>
        <p>
          <a
            href="https://cloudinary.com/documentation/upload_widget_reference"
            target="_blank"
          >
            Upload Widget Reference
          </a>
        </p>
      </div>
    </>
  );
}
