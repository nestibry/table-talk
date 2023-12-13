import * as React from "react";
import { useEffect, useState } from "react"
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
    const postImage = props.post?.photo_id ;
    const description = props.post?.description || '';
    const restaurant_name = props.post?.restaurant_name || '';
    const restaurant_city = props.post?.restaurant_city || '';
    const comments = props.post?.comments;


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card  sx={{ maxWidth: 345 }}>

            <CardHeader
                title={display_name}
                subheader={formattedPostDate}
                avatar={<Avatar alt={display_name} src={avatarUrl} />}
                action={
                    <Button onClick={() => console.log("Follow/Unfollow clicked")}>
                        {/* {post.status === "Following" ? "Unfollow" : "Follow"} */}
                    </Button>
                }
            />

            <CardMedia component="img" height="200" image={postImage} alt="Post Image" />

            <CardContent>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
                <Typography variant="body2" color="text.secondary">{restaurant_name}</Typography>
                <Typography variant="body2" color="text.secondary">{restaurant_city}</Typography>
            </CardContent>


            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <ThumbUpIcon />
                </IconButton>
                <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Comments</Typography>

                    {comments.map((comment) => (
                        <div key={comment.comment_id} className="mb-2">
                            <Avatar alt={comment.creator_id.display_name} src={comment.creator_id.profile_pic} />
                            <Typography variant="body2" color="text.secondary">
                                <strong>{comment.creator_id.display_name}:</strong> {comment.comment_body}
                            </Typography>
                        </div>
                    ))}

                </CardContent>
            </Collapse>
        </Card>

    );
}
