import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";

export default function PrivatePage() {
    const appCtx = useAppCtx();
    const [messageData, setMessageData] = useState({ name: '', phone: '', message: '' });

    // useEffect(() => {
    //     // Update local state when appCtx.contactFormData changes
    //     setMessageData(appCtx.contactFormData);
    // }, [appCtx.contactFormData]);

    useEffect(() => {
        console.log('PrivatePage appCtx:', appCtx);
        console.log('PrivatePage contactFormData:', appCtx.contactFormData);
        console.log('PrivatePage messageData:', messageData);
    }, [appCtx, messageData]);

    return (
        <>
            <h1>Private Page</h1>
            <p>This is an example of a page that would require an authenticated user.</p>
            <div>
                <strong>Name:</strong> {messageData.name}<br />
                <strong>Phone:</strong> {messageData.phone}<br />
                <strong>Message:</strong> {messageData.message}<br />
            </div>
        </>
    );
}