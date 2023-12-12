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
import NewsFeed from "./pages/NewsFeed";
import "./App.css";
import Navbar from "./components/Navbar"




export default function App() {
    return (
        <AppProvider>

            <BrowserRouter>
                <Header />
                <div className="container pt-5">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/auth" element={<AuthPage type="login" />} />
                        <Route path="/signup" element={<AuthPage type="signup" />} />


                        <Route path="/private" element={
                            <ProtectedRoute>
                                <NewsFeed />
                            </ProtectedRoute>
                        } />

                        <Route path="/feed" element={
                            <ProtectedRoute>
                                <NewsFeed />
                            </ProtectedRoute>
                        } />

                        <Route path="/logout" element={<Logout />} />
                        <Route path="/createprofile" element={<CreateProfile />} />
                        <Route path="/howtopage" element={<HowToPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/newsfeed" element={<NewsFeed />} />
                        <Route path="/nav" element={<Navbar />} />

                    </Routes>
                </div>
            </BrowserRouter>



        </AppProvider>
    );
}
