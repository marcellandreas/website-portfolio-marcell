import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  MainLayout,
  Projects,
  LandingPage,
  ProjectDetails,
  NotFound,
} from "./routers";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  // useEffect(() => {
  //   if (showAlert) {
  //     alert("Tahap Perbaikan");
  //     setShowAlert(false);
  //   }
  // }, [showAlert]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <MainLayout>
              <Projects />
            </MainLayout>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <MainLayout>
              <ProjectDetails />
            </MainLayout>
          }
        />
        <Route
          path="/*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
