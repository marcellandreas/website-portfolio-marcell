import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  // useEffect(() => {
  //   if (showAlert) {
  //     alert("Tahap Perbaikan");
  //     setShowAlert(false);
  //   }
  // }, [showAlert]);
  return <LandingPage />;
}

export default App;
