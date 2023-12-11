import { useState, useEffect } from "react"
import Auth from "../components/Auth"
import CreateProfile from "../components/CreateProfile"

// export default function AuthPage(){
export default function AuthPage({ type = "login" }) {


    return (
        <div className="d-flex gap-5">
            {type === 'login' ?
                <div>
                    <Auth />
                </div>
                :
                <div>
                    <CreateProfile />
                </div>
            }
        </div>
    )
}