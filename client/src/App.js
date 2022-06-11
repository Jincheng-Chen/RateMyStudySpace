import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./screens/landingPage/LandingPage";
import NewReview from "./screens/ReviewPage/NewReview";
import "./App.css";
import Header from "./shared/components/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/styles";
import SearchPage from './screens/searchPage/SearchPage';
import NewStudySpacePage from './screens/newStudySpacePage/NewStudySpacePage';
function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route index element={<LandingPage></LandingPage>} />
              <Route path="/search" element={<SearchPage></SearchPage>} />
              <Route
                path="/newStudySpace"
                element={<NewStudySpacePage></NewStudySpacePage>}
              />
              <Route path="/newReview" element={<NewReview />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
