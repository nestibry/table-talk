import {Auth, CreateProfile} from "../components/"

export default function AuthPage({ type = "login" }) {
    return (
        // <div className="d-flex gap-5">
        <div className="container">
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