import { useContext, useRef, useEffect } from "react";
import Slider from "../components/Slider";
import SettingsContext from "../contexts/SettingsContext";
import Button from "./Button";

export default function SettingsModal({ open, onClose }) {
        const dialogRef = useRef();
        const settingsInfo = useContext(SettingsContext);
      
        useEffect(() => {
          const dialog = dialogRef.current;
          if (open) {
            dialog.showModal();
          } else if (dialog.open) {
            dialog.close();
          }
        }, [open]);
    
    return (
        <dialog ref={dialogRef} onClose={onClose}>
          <h2>Paramètres Pomodoro</h2>

      <form>
        <label>work: {settingsInfo.workMinutes}:00</label>
        <Slider
          defaultValue={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        />
        <label>break: {settingsInfo.breakMinutes}:00</label>
        <Slider
          defaultValue={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        />
      </form>
      <div>
        <Button type="button" label="fermer" onClick={() => dialogRef.current.close()} />
      </div>
      </dialog>
    )
}
