import React from "react";
import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";

import PostCard from "./PostCard";

export default function UserFeed(props) {

 

  const appCtx = useAppCtx();
  // console.log(appCtx)

  const tempId = "6579e735794d4ceedc70180d"

  const [posts, setPosts] = useState();
  const [userData, setUserData] = useState();

  async function fetchPosts() {
    try {
      const socialsResponse = await fetch(`/api/social/user/${props.userId}`);
      const socialsResponseJson = await socialsResponse.json();

      const reviewsResponse = await fetch(`/api/review/user/${props.userId}`);
      const reviewsResponseJson = await reviewsResponse.json();

      if (socialsResponseJson.result === "success" && reviewsResponseJson.result === "success") {
        const socials = socialsResponseJson.payload;
        const reviews = reviewsResponseJson.payload;

        // Create and Sort the NewsFeed
        const newsFeed = [...socials, ...reviews];
        const sortedNewsFeed = newsFeed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedNewsFeed);
      }

    } catch (err) {
      console.error(err);
    }
  }

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    // am I using the right api call?
    // console.log(appCtx.user)
    setUserData(appCtx.user);
    // console.log(userData);
    // fetchUserData();

  }, []);

  useEffect(() => {
    // am I using the right api call?
    // console.log(userData)
    fetchPosts();

  }, [userData]);


  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px", color: "#FFA6D7" }}>Discover a love story on a plate in the latest post – <br />
        <span style={{ color: "#C24646" }}>Check Out All Your Posts!</span></h1>
      <br />
   

      {posts ? (
        posts.map(post => (
          <div key={post._id} className="mb-3">
            <PostCard post={post} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

    </>
  );
}
