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

export default function Post({ type = "review" }) {
  const url = "/api/social";
  const [data, setData] = useState([]);
  const [creatorData, setCreatorData] = useState([]);

  async function fetchInfo() {
    const res = await fetch(url)
    const tempData = await res.json()

    setData(tempData.payload)
    // setData(data => {
    //   setCreatorData(data.creator_id)
    //   console.log(Object.values(data.comments))
    //   const tempCommentData = Object.values(data.comments).map(item => {
    //     return {
    //       comment_body: item.comment_body,
    //       display_name: item.creator_id.display_name,
    //       profile_pic: item.creator_id.profile_pic,
    //       status: item.creator_id.status,
    //     }
    //   })
    //   setCommentData(tempCommentData)
    //   return data;
    // })
    // console.log(data)
  }

  console.log(data);
  const posts = data.map(post => {
    console.log(post.creator_id.display_name)
    return <div key={post._id}>
      <ImportData display_name={post.creator_id.display_name} description={post.description} comments={post.comments} ></ImportData>
    </div>
  })
  // console.log(commentData[0]);
  // console.log(usableCommentData);

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      {posts}
    </>
  );
}
