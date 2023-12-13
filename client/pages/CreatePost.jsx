import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button, TextField } from "@mui/material";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import { useAppCtx } from "../utils/AppProvider";

export default function CreatePost() {
    const appCtx = useAppCtx();

    const [postContent, setPostContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantCity, setRestaurantCity] = useState("");

    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (appCtx?.user?._id) setUserId(appCtx.user._id || "");
    }, [appCtx.user]);

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
        cropping: true, //add a cropping step
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
        singleUploadAutoClose: false,
    });


    const createPost = async (postData) => {

        try {
            console.log("posting data", postData);

            if (postData.restaurant_name && postData.restaurant_city) {
                const response = await fetch("/api/review", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });

                if (response.ok) {
                    console.log(" Review Posted!");
                    window.location.href = '/feed';
                } else {
                    console.error("Review not posted!", await response.json());
                    alert('Error posting. Please try again.');
                }
            } else {
                const response = await fetch("/api/social", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(postData),
                });

                if (response.ok) {
                    console.log("Social Posted!");
                    window.location.href = '/feed';
                } else {
                    console.error("Social not posted!", await response.json());
                    alert('Error posting. Please try again.');
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };


    const handlePostSubmit = () => {
        if (!imageUrl) {
            alert("Please upload a photo to post");
            return;
        }
        const postData = {
            creator_id: userId,
            photo_id: imageUrl,
            description: postContent,
            restaurant_name: restaurantName,
            restaurant_city: restaurantCity,
        };

        createPost(postData);
        setPostContent("");
        setImageUrl("");
        setRestaurantName("");
        setRestaurantCity("");
    };


    if (!userId) return (<></>);
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

                {isUploaded ?
                    <div className="mt-1">
                        <img src={imageUrl} alt="User Profile Pic" style={{
                            background: "white",
                            // width: "4rem",
                            height: "3rem"
                        }} />
                        <p>Image uploaded!</p>
                    </div>
                    : <p>No image selected</p>}

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
                    size="small"
                    sx={{ marginBottom: "16px" }}
                />
                <TextField
                    label="Restaurant City"
                    id="outlined-size-small"
                    value={restaurantCity}
                    onChange={(e) => setRestaurantCity(e.target.value)}
                    size="small"
                />
            </CardContent>
            <CardActions>
                <Button onClick={handlePostSubmit} size="small" color="primary">
                    Add Post
                </Button>
            </CardActions>
        </Card>
    );
}
