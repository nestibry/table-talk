import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";
import PostCard from "../components/PostCard";

export default function PrivatePage() {
    const appCtx = useAppCtx();

    const [posts, setPosts] = useState();

    async function fetchPosts() {
        try {
            const socialsResponse = await fetch('/api/social');
            const socialsResponseJson = await socialsResponse.json();

            const reviewsResponse = await fetch('/api/review');
            const reviewsResponseJson = await reviewsResponse.json();

            if (socialsResponseJson.result === "success" && reviewsResponseJson.result === "success") {
                const socials = socialsResponseJson.payload;
                const reviews = reviewsResponseJson.payload;

                // Create and Sort the NewsFeed
                const newsFeed = [...socials, ...reviews];
                const sortedNewsFeed = newsFeed.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                console.log('Sorted News Feed', sortedNewsFeed);
                setPosts(sortedNewsFeed);
            }

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", fontSize: "50px", color: "#FFA6D7" }}>Discover a love story on a plate in the latest post – <br />
                <span style={{ color: "#C24646" }}>Where food and dating find their perfect match!</span></h1>
            <br />
            
            {posts ? (
                posts.map(post => (
                    <div className="mb-3">
                        <PostCard key={post._id} post={post} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}