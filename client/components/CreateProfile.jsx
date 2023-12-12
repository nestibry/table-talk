import React from "react";
import { useEffect, useState } from "react"
import { useAppCtx } from "../utils/AppProvider"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export default function CreateProfile() {

    
    const appCtx = useAppCtx();
    const [formData, setFormData] = useState({
        email: '',
        display_name: '',
        password: '',
        status: '',
        location_state: '',
        age: '',
        gender_identity: '',
        profile_pic: '',
    });


    const [imageUrl, setImageUrl] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);


    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i;
    const [isEmailValid, setIsEmailValid] = useState(true);
    function handleEmailChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsEmailValid(emailRegex.test(e.target.value));
    };


    const [isPasswordValid, setIsPasswordValid] = useState(true);
    function handlePasswordChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Check if the password meets the minimum length requirement
        setIsPasswordValid(e.target.value.length >= 8);
    };


    function handleFormChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    async function handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        try {
            const response = await fetch('/api/user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            console.log(response);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            if (response.ok) {
                window.location.href = "/feed";
            } else {
                alert("Profile could not be created. \nTry using a different email, display name, or both.");
            }
        } catch (error) {
            console.error("Error: ", error);
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
        // cropping: true, //add a cropping step
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
        form: "#upload-widget"
    });

    // console.log(imageUrl);
    // console.log(isUploaded);
    useEffect(() => {
        setFormData({ ...formData, profile_pic: imageUrl })
        console.log(formData);
    }, [imageUrl])



    return (
        <>
            <div className="mb-3">
                <h3>Upload a Profile Pic!</h3>
                <CloudinaryUploadWidget uwConfig={uwConfig} setImageUrl={setImageUrl} setIsUploaded={setIsUploaded} />
            </div>

            {isUploaded ? <p>Image uploaded!</p> : <p>No profile pic selected</p>}

            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleEmailChange}
                        isInvalid={!isEmailValid}
                        pattern={emailRegex}
                        title="Enter a valid email address"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDisplayName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="display_name"
                        placeholder="YourDisplayName"
                        required
                        onChange={handleFormChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handlePasswordChange}
                        pattern=".{8,}" // Minimum length of 8 characters
                        title="Password must be at least 8 characters"
                        isInvalid={!isPasswordValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Password must be at least 8 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfileStatus">
                    <Form.Label>Profile Status</Form.Label>
                    <Form.Select name="status" onChange={handleFormChange}>
                        <option></option>
                        <option>Looking for new friends</option>
                        <option>Looking for a romantic connection</option>
                        <option>Just here for the food recommendations</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLocationState">
                    <Form.Label>State</Form.Label>
                    <Form.Select name="location_state" onChange={handleFormChange}>
                        <option></option>
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
                    <Form.Select name="age" onChange={handleFormChange}>
                        <option></option>
                        <option>18-25</option>
                        <option>26-35</option>
                        <option>36-45</option>
                        <option>46-60</option>
                        <option>60+</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPronoun">
                    <Form.Label>Pronoun</Form.Label>
                    <Form.Select name="gender_identity" onChange={handleFormChange}>
                        <option></option>
                        <option>He/Him</option>
                        <option>She/Her</option>
                        <option>They/Them</option>
                    </Form.Select>
                </Form.Group>




                <Button className="mb-5" variant="primary" type="submit">
                    Create Profile
                </Button>

            </Form>



        </>
    );
}
