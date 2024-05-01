import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import Apply from "./Pages/Apply.jsx";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplyWrapper />} />
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
