import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./screens/landingPage/LandingPage";
import NewReview from "./screens/ReviewPage/ReviewForm/Components/NewReview";
import ReviewForm from "./screens/ReviewPage/ReviewForm/ReviewForm";
import "./App.css";
import Header from "./shared/components/Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import SearchPage from "./screens/searchPage/SearchPage";
import NewStudySpacePage from "./screens/newStudySpacePage/NewStudySpacePage";
import IndividualStudySpacePage from "./screens/individualStudySpacePage/IndividualStudySpacePage";
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
              <Route
                path="/studySpace"
                element={<IndividualStudySpacePage />}
              />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
