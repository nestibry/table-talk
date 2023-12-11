import { useEffect, useState } from "react";
import { useAppCtx } from "../utils/AppProvider";

export default function ProtectedPage() {
    const appCtx = useAppCtx();

    useEffect(() => {
        console.log('ProtectPage appCtx:', appCtx);
    }, [appCtx]);

    return (
        <>
            <h1>Private Page</h1>
            <p>This is an example of a page that would require an authenticated user.</p>
        </>
    );
}