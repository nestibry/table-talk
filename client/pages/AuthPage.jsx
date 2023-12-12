import {Auth, CreateProfile} from "../components/"

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