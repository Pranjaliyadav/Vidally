import { EuiProvider, EuiThemeProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.json";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const overrides = {
    colors: {
      LIGHT: { primary: "#2561EC" },
      DARK: { primary: "#2561EC" },
    },
  };
  return (
    <EuiProvider>
      <EuiThemeProvider modify={overrides}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="*" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
