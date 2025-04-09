import Timer from "../components/Timer";
import SettingsModal from "../components/SettingsModal";
import Button from "../components/Button";
import { useState } from "react";

function Homepage() {

  const [showSettings, setShowSettings] = useState(false);

  return (
    <main>
      < Timer />
      <Button
        type="button"
        label="⚙️ Settings"
        onClick={() => setShowSettings(true)}
      />

      <SettingsModal open={showSettings} onClose={() => setShowSettings(false)} />
    </main>
  )
}

export default Homepage;
