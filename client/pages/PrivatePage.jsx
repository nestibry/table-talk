import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";

export default function ProtectedPage() {
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
            <h1>News Feed</h1>
            {posts ? (
                posts.map(post => (
                    <div key={post._id}>
                        <p>{post.description}</p>
                        <p>{post._id}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <p>This is an example of a page that would require an authenticated user.</p>
        </div>
    );
}