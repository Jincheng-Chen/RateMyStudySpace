import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./screens/landingPage/LandingPage";
import "./App.css";
import Header from "./shared/components/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/styles";
function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Header></Header>
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
    </ThemeProvider>
  );
}

export default App;
