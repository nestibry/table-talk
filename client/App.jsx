import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./utils/AppProvider";
import { Header, ProtectedRoute } from "./components";
import { HomePage, AuthPage, Logout, PrivatePage } from "./pages/";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import CreateProfile from "./pages/CreateProfile";
import HowToPage from "./pages/HowToPage/HowToPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";



export default function App() {
    return (
        <AppProvider>

            <BrowserRouter>
                <Header />
                <div className="container pt-5">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/auth" element={<AuthPage type = "login"/>} />
                        <Route path="/signup" element={<AuthPage type = "login"/>} />


                        <Route path="/private" element={
                                <ProtectedRoute>
                                    <PrivatePage />
                                </ProtectedRoute>
                        }/>

                        <Route path="/logout" element={<Logout />} />
                        <Route path="/createprofile" element={<CreateProfile />} />
                        <Route path="/howtopage" element={<HowToPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/search" element={<SearchPage />} />
                    </Routes>
                </div>
            </BrowserRouter>



        </AppProvider>
    );
}
