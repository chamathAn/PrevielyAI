import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Apply from "./Pages/Apply.jsx";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./Components/Navbar.jsx";
import axios from "axios";
import Dashboad from "./admin/Dashboad.jsx";
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
import { useUser } from "@clerk/clerk-react";
import AdmiProtectedRoute from "./admin/utils/AdmiProtectedRoute.jsx";

function App() {
  const { isLoaded } = useUser();
  axios.defaults.baseURL = BACKEND_BASE_URL;
  axios.defaults.withCredentials = true;

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyWrapper />} />
        <Route
          path="/admin"
          element={
            <>
              <SignedIn>
                <AdmiProtectedRoute>
                  <Dashboad />
                </AdmiProtectedRoute>
              </SignedIn>

              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

function ApplyWrapper() {
  return (
    <>
      <SignedIn>
        <Apply />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default App;
