import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";





//from mui textfields
export default function () {
  return (
    <>
      <h1>Create a Post</h1>
      <Card>
        <CardContent>
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            value={newPost.description}
            onChange={handleInputChange}
          />
          <TextField
            label="Restaurant Name"
            variant="outlined"
            name="restaurant_name"
            value={newPost.restaurant_name}
            onChange={handleInputChange}
          />
          <TextField
            label="Restaurant City"
            variant="outlined"
            name="restaurant_city"
            value={newPost.restaurant_city}
            onChange={handleInputChange}
          />
           <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </CardContent>

        <Button onClick={handleCreatePost} variant="contained" color="primary">
          Create Post
        </Button>
      </Card>
    </>
  );
}
