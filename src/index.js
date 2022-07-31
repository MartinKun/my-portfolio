import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/app";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { AnimationProvider } from "./context/AnimationContext";
import { ScrollRevealProvider } from "./context/ScrollRevealContext";

import ResumePdf from "./pages/resume";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AnimationProvider>
      <LanguageProvider>
        <ThemeProvider>
          <ScrollRevealProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/resume_pdf" element={<ResumePdf />} />
            </Routes>
          </ScrollRevealProvider>
        </ThemeProvider>
      </LanguageProvider>
    </AnimationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
