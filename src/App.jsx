import "./App.css";
import Homepage from "./pages/Homepage";
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
      <Homepage />
      <Footer />
    </SettingsContext.Provider>
  );
}

export default App;
