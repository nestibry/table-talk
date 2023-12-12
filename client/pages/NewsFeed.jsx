import Container from "react-bootstrap/esm/Container";
import Post from "../components/Post";
import React from "react";

export default function NewsFeed() {
  return (
    <>
      <h1 style={{textAlign:"center", fontSize:"50px", color:"#FFA6D7"}}>Discover a love story on a plate in the latest post – <br />
      <span style={{color: "#C24646"}}>Where food and dating find their perfect match!</span></h1>
      <br />
<Container>
<Post />
</Container>
  

    </>
  );
}
