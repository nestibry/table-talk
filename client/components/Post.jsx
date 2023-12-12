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
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ImportData from "./ImportData";

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

export default function Post({ type = "review", resName }) {
  const [expanded, setExpanded] = React.useState(false);

  const user = {
    display_name: "display_name",
    avatarUrl: "https://www.w3schools.com/css/img_forest.jpg",
  };

  const post = {
    creator_id: {
      email: "display_name",
    },
    createdAt: {
      timestamp: "2 hours ago",
    },
  };

  const postImage = "url/to/post/image.jpg";

  const description = {
    text: "This is where the user's caption will go.",
  };

  const comments = [
    {
      user: {
        display_name: "display_name1",
        avatarUrl: "url/to/avatar1.jpg",
      },
      text: "Let's connect!",
    },
    {
      user: {
        display_name: "display_name2",
        avatarUrl: "url/to/avatar2.jpg",
      },
      text: "Food looks yummy!",
    },
  ];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar alt={user.display_name} src={user.avatarUrl} />}
          action={
            <Button onClick={() => console.log("Follow/Unfollow clicked")}>
              {post.status === "Following" ? "Unfollow" : "Follow"}
            </Button>
          }
          // I can not figure out how to get the following button to react the same way as it does in the search page //

          title={post.creator_id.email}
          subheader={post.createdAt.timestamp}
        />
        <CardMedia
          component="img"
          height="194"
          image={postImage}
          alt="Post Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.text}
          </Typography>
        </CardContent>
        {type === "review" && (
          <div>
            <Typography variant="body2" color="text.secondary">
              Restaurant: {resName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location:
            </Typography>
          </div>
        )}
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <ThumbUpIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments</Typography>
            {comments.map((comment, index) => (
              <div key={index}>
                <Avatar
                  alt={comment.user.display_name}
                  src={comment.user.avatarUrl}
                />
                <Typography variant="body2" color="text.secondary">
                  <strong>{comment.user.display_name}:</strong> {comment.text}
                </Typography>
              </div>
            ))}

          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
