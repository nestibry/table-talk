import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";

export default function ProtectedPage() {
    const appCtx = useAppCtx();

    const [posts, setPosts] = useState({});

    async function fetchPosts() {
        try {
            const socialsResponse = await fetch('/api/social');
            const socialsResponseJson = await socialsResponse.json();
            // console.log('Socials Response',socialsResponse);
            // console.log('Socials JSON', socialsResponseJson); 

            const reviewsResponse = await fetch('/api/review');
            const reviewsResponseJson = await reviewsResponse.json();
            // console.log('reviews Response',reviewsResponse);
            // console.log('reviews JSON', reviewsResponseJson); 

            if (socialsResponseJson.result === "success" && reviewsResponseJson.result === "success") {
                const socials = socialsResponseJson.payload;
                const reviews = reviewsResponseJson.payload;
                const newsFeed = [];
                // console.log('Socials JSON', socialsResponseJson.payload);
                // console.log('Reviews JSON', reviewsResponseJson.payload); 
                socials.forEach(item => { newsFeed.push(item) });
                reviews.forEach(item => { newsFeed.push(item) });
                console.log('News Feed', newsFeed);

                // const timestamps = newsFeed.map(item => item.createdAt);
                // console.log(timestamps);
                // const sorted = [...timestamps].sort((a, b) => new Date(a) - new Date(b));
                // console.log(sorted);

                // const sortedNewsFeed = [...newsFeed].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                const sortedNewsFeed = [...newsFeed].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                console.log('Sorted News Feed', sortedNewsFeed);

                setPosts(sortedNewsFeed);
            }

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        console.log('appCtx:', appCtx);
        fetchPosts();
    }, []);

    return (
        <>
            <div>
                <h1>Private Page</h1>
                <p>This is an example of a page that would require an authenticated user.</p>
            </div>
        </>
    );
}