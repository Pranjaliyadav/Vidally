import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.json";
import React from "react";
import { Route, BrowserRouter,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <EuiProvider>
      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="*" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
    </EuiProvider>
  );
}

export default App;
