import React from "react";
import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

import UserFeed from "../components/UserFeed";

import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

//work in progress, still need to alter form fields


export default function ProfilePage() {


  const appCtx = useAppCtx();

  const [userId, setUserId] = useState(appCtx.user._id);
  console.log(userId);

  // console.log(appCtx.user)

  const tempId = "6579e735794d4ceedc70180d"

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

  // const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const [updateShow, setUpdateShow] = useState(false);
  const [notUpdateShow, setNotUpdateShow] = useState(false);

  function handleUpdateShow(responseOk) {
    if (responseOk) {
      setUpdateShow(true);
    } else {
      setNotUpdateShow(true);
    }

  }

  function handleClose() {
    setUpdateShow(false);
    setNotUpdateShow(false);

  }


  async function fetchUserData() {
    try {
      const response = await fetch(`/api/user/${userId}`);
      const tempUserData = await response.json();

      // console.log(tempUserData);

      setFormData({
        email: tempUserData.payload.email,
        display_name: tempUserData.payload.display_name,
        // password: "",
        status: tempUserData.payload.status,
        location_state: tempUserData.payload.location_state,
        age: tempUserData.payload.age,
        //do we still want age?
        gender_identity: tempUserData.payload.gender_identity,
        //need to add in pronouns
        profile_pic: tempUserData.payload.profile_pic,
      });
      setImageUrl(tempUserData.payload.profile_pic)
    } catch (error) {
      console.error("Error! ", error);
    }
  };

  // Replace with your own cloud name
  const [cloudName] = useState("table-talk");
  // Replace with your own upload preset
  const [uploadPreset] = useState("profile_upload");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    sources: ["local"], // restrict the upload sources to URL and local files
    multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    tags: ["users", "profile_pic"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["png", "jpeg"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
    form: "#upload-widget",
    showSkipCropButton: false,
    singleUploadAutoClose: false,
  });


  function handleFormChange(e) {
    console.log(e.target.name)
    // if (e.target.name === "password") {
    //   setIsEditingPassword(true)
    // } else {
    //   setIsEditingPassword(false);
    // }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form Updated", formData);

    try {
      const response = await fetch(`/api/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      // if (response.ok) {
      //   alert("Profile updated");
      // } else {
      //   alert("Profile not updated.");
      // }
      handleUpdateShow(response.ok);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    // am I using the right api call?
    setUserData(appCtx.user);
    // console.log(userData);
    // fetchUserData();

  }, []);

  useEffect(() => {
    if (appCtx?.user?._id) setUserId(appCtx.user._id || "");
  }, [appCtx.user]);

  useEffect(() => {
    // am I using the right api call?
    // console.log(userData)
    fetchUserData();
    // console.log(userData)

  }, [userId]);

  useEffect(() => {
    setFormData({ ...formData, profile_pic: imageUrl });

  }, [imageUrl]);

  // console.log(userData);

  if (!userId) return (<></>);
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
      <div className="mb-3">
        <h3>Upload a Profile Pic!</h3>
        <CloudinaryUploadWidget uwConfig={uwConfig} setImageUrl={setImageUrl} setIsUploaded={setIsUploaded} />
      </div>

      <img src={imageUrl} alt="User Profile Pic" style={{
        background: "white",
        width: "4rem",
        height: "4rem"
      }} />

      {isUploaded ? <p>Image uploaded!</p> : <p>No profile pic selected</p>}

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

        {/* <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            //type should hide password unless user is editing
            type={isEditingPassword ? "text" : "password"}
            // type="text"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleFormChange}
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formProfileStatus">
          <Form.Label>Profile Status --- Currently: {formData.status}</Form.Label>
          <Form.Select
            name="status"
            // value={formData.status}
            onChange={handleFormChange}>
            <option>Select Status</option>
            <option value="Looking for new friends">Looking for new friends</option>
            <option value="Looking for a romantic connection">Looking for a romantic connection</option>
            <option value="Just here for the food recommendations">Just here for the food recommendations</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLocationState">
          <Form.Label>State --- Currently: {formData.location_state}</Form.Label>
          <Form.Select name="location_state"
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
          <Form.Label>Age --- Currently: {formData.age}</Form.Label>
          <Form.Select
            name="age"
            // value={formData.age}
            onChange={handleFormChange}>
            <option>Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="26-45">26-45</option>
            <option value="46-60">46-60</option>
            <option value="60+">60+</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Pronouns --- Currently: {formData.gender_identity}</Form.Label>
          <Form.Select
            name="gender_identity"
            // value={formData.gender_identity}
            onChange={handleFormChange}>
            <option>Select Pronoun</option>
            <option value="He/Him">He/Him</option>
            <option value="She/Her">She/Her</option>
            <option value="They/Them">They/Them</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>
      <div>

      </div>
      <UserFeed userId={userId}></UserFeed>

      <Modal
        show={updateShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your profile was updated successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={notUpdateShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Profile Not Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          There was a problem updating your profile. It is likely that email or display name is already taken. Please try again.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
