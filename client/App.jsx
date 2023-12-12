import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from "./utils/AppProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { 
            ProtectedRoute,
            Header, 

            Navbar,
        } from "./components/";

import {    
            AuthPage, 
            Logout, 
            Home, 
            NewsFeed,
            ProfilePage,
            SearchPage,
            CreatePost,

            CreateProfile,
            HowToPage,
        } from "./pages/";

        
        // import Navbar from "./components/Navbar"
        // import CreatePost from "./pages/CreatePost";
        
        // import NewsFeed from "./pages/NewsFeed";
        // import SearchPage from "./pages/SearchPage";
        // import ProfilePage from "./pages/ProfilePage";
        // import HowToPage from "./pages/HowToPage/HowToPage";
        // import CreateProfile from "./pages/CreateProfile";
        // import Header from "./components/Header/Header";
        // import { Header } from './components/';



export default function App() {
    return (
        <AppProvider>

            <BrowserRouter>
                <Header />
                <div className="container pt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<AuthPage type="login" />} />
                        <Route path="/signup" element={<AuthPage type="signup" />} />

                        {/* Protected Routes */}
                        <Route path="/feed" element={<ProtectedRoute><NewsFeed /></ProtectedRoute>} />

                        <Route path="/logout" element={<Logout />} />

                        {/* These are Development Routes  */}
                        <Route path="/createprofile" element={<CreateProfile />} />
                        <Route path="/howtopage" element={<HowToPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/newsfeed" element={<NewsFeed />} />
                        <Route path="/nav" element={<Navbar />} />
                        <Route path="post" element={<CreatePost /> } />

                    </Routes>
                </div>
            </BrowserRouter>
        </AppProvider>
    );
}
