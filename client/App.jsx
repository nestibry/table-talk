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
                        <Route path="/logout" element={<Logout />} />

                        {/* Protected Routes */}
                        <Route path="/feed" element={<ProtectedRoute><NewsFeed /></ProtectedRoute>} />
                        <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
                        <Route path="/userprofile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                        <Route path="/post" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />


                        {/* These are Development Routes  */}
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/createprofile" element={<CreateProfile />} />
                        <Route path="/howtopage" element={<HowToPage />} />
                        <Route path="/search" element={<SearchPage />} />
                        <Route path="/newsfeed" element={<NewsFeed />} />
                        <Route path="/nav" element={<Navbar />} />
                        <Route path="createpost" element={<CreatePost /> } />

                    </Routes>
                </div>
            </BrowserRouter>
        </AppProvider>
    );
}
