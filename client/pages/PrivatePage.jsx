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
            
            if (socialsResponseJson.result === "success" && reviewsResponseJson.result) {
                const socials = socialsResponseJson.payload;
                const reviews = reviewsResponseJson.payload;
                const newsFeed = [];
                console.log('Socials JSON', socialsResponseJson.payload);
                console.log('Reviews JSON', reviewsResponseJson.payload); 
                socials.forEach(item => { newsFeed.push(item)});
                reviews.forEach(item => { newsFeed.push(item)});
                console.log(newsFeed);  
                const timestamps = newsFeed.map(item => item.createdAt);
                console.log(timestamps);
            } 

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        console.log('appCtx:', appCtx);
        fetchPosts();        
    }, [appCtx]);

    return (
        <>
            <h1>Private Page</h1>
            <p>This is an example of a page that would require an authenticated user.</p>
        </>
    );
}