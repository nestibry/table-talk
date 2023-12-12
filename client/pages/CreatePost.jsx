import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Typography from '@mui/material/Typography';
import { Button, TextField } from "@mui/material";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

export default function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantLocation, setRestaurantLocation] = useState("");


  // Replace with your own cloud name
  const [cloudName] = useState("table-talk");
  // Replace with your own upload preset
  const [uploadPreset] = useState("post_upload");

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
    multiple: false, //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    tags: ["users", "profile_pic"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["png", "jpeg"], //restrict uploading to image files only
    maxImageFileSize: 2000000, //restrict file size to less than 2MB
    maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
    form: "#upload-widget",
  });

  console.log(imageUrl);
  console.log(isUploaded);
  // useEffect(() => {
  //     setFormData({ ...formData, profile_pic: imageUrl })
  //     console.log(formData);
  // }, [imageUrl])

  const handlePostSubmit = () => {
    console.log("Caption!!!", postContent);
    
    
    setPostContent("");
    setImageUrl("");
    setRestaurantName("");
    setRestaurantLocation("");
  
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
      <div>
          <h3>Upload a Photo</h3>
          <CloudinaryUploadWidget
      
            uwConfig={uwConfig}
            setImageUrl={setImageUrl}
            setIsUploaded={setIsUploaded}
          />
        </div>
        {isUploaded ? <p>Image uploaded!</p> : <p>No image selected</p>}

        <TextField
          required
          id="outlined-multiline-flexible"
          label="Add Your Caption Here"
          multiline
          maxRows={4}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          fullWidth
          sx={{ marginBottom: "16px" }}
        />
       
        <TextField
          label="Restaurant"
          id="outlined-size-small"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          defaultValue=""
          size="small"
          sx={{ marginBottom: "16px" }}
        />
        <TextField
          label="Restaurant Location"
          id="outlined-size-small"
          value={restaurantLocation}
          onChange={(e) => setRestaurantLocation(e.target.value)}
          defaultValue=""
          size="small"
        />
      </CardContent>
      <CardActions>
        <Button onClick={ handlePostSubmit } size="small" color="primary">
          Add Post
        </Button>
      </CardActions>
    </Card>
  );
}
