import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import SettingsContext from "./contexts/SettingsContext";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)


  return (
    <SettingsContext.Provider value={{
      workMinutes,
      breakMinutes,
      setWorkMinutes,
      setBreakMinutes
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </SettingsContext.Provider>
  );
}

export default App;
