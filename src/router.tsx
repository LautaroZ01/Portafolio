import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProjectPage from "./Pages/ProjectPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}
