import { useContext } from "react";
import Slider from "../components/Slider";
import SettingsContext from "../contexts/SettingsContext";

function Settings() {
    const settingsInfo = useContext(SettingsContext)
    return (
        <form>
            <label>work: {settingsInfo.workMinutes}:00</label>
            <Slider  
              defaultValue={settingsInfo.workMinutes}
              onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            />
            <label>break: {settingsInfo.breakMinutes}:00</label>
            <Slider 
              defaultValue={settingsInfo.breakMinutes}
              onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            />
        </form>
    )
}

export default Settings;
