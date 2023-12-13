import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Grid from "@mui/material/Grid";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard(props) {
  const [expanded, setExpanded] = useState(false);

  console.log(props)

  const formattedPostDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(new Date(props.post?.createdAt));
  const display_name = props.post?.creator_id?.display_name || 'Unknown';
  const avatarUrl = props.post?.creator_id?.profile_pic;
  const postImage = props.post?.photo_id;
  const description = props.post?.description || '';
  const restaurant_name = props.post?.restaurant_name || '';
  const restaurant_city = props.post?.restaurant_city || '';
  const comments = props.post?.comments;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <main style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{
            width: "80%",
            height: "50%",
            //   display: "flex",
            //   justifyContent: "center",
          }}
        >
          <CardContent>
            <Grid container spacing={2} alignItems="flex-start">
              <Grid item xs={12} md={6}>
                <CardHeader
                  title={display_name}
                  style={{ fontSize: "50px" }}
                  subheader={formattedPostDate}
                  avatar={<Avatar alt={display_name} src={avatarUrl} />}
                  // action={
                  //   <Button
                  //     onClick={() => console.log("Follow/Unfollow clicked")}
                  //   >

                  //   </Button>
                  // }
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    fontSize: "40px",
                    padding: "0",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "black",
                  }}
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "25px", padding: "0", color: " #F57C36" }}
                >
                  {restaurant_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "25px", padding: "0", color: "#C24646" }}
                >
                  {restaurant_city}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  style={{ width: "100%", maxHeight: "250px", objectFit: "contain" }}
                  image={postImage}
                  alt="Post Image"
                />
              </Grid>
            </Grid>


            <Grid container spacing={1} alignItems={"flex-start"}> 
            <Grid item xs={12} sm={6}> 
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Comments</Typography>

                {comments.map((comment) => (
                  <div key={comment.comment_id} className="">
                    <Avatar
                      alt={comment.creator_id.display_name}
                      src={comment.creator_id.profile_pic}
                    />
                    <Typography variant="body2" color="text.secondary">
                      <strong>{comment.creator_id.display_name}:</strong>{" "}
                      {comment.comment_body}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Collapse>
            </Grid>
            <Grid item xs={12} sm={6}> 
            <CardActions disableSpacing>
              {/* <IconButton aria-label="like"><ThumbUpIcon /></IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            </Grid>
            
            </Grid>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
