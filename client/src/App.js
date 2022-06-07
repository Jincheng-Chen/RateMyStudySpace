import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./screens/landingPage/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage></LandingPage>} />
            <Route path="/search" element={<div>Search Page</div>} />
            <Route
              path="/newStudySpace"
              element={<div>New Study Space Page</div>}
            />
            <Route path="/newReview" element={<div>New Review</div>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
