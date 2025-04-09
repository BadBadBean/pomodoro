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

    const handleOutsideClose = (event) => {
      if (event.target === dialog) {
        onClose();
      }
    };

    dialog.addEventListener("click", handleOutsideClose);

    return () => {
      dialog.removeEventListener("click", handleOutsideClose);
    };
  }, [open, onClose]);

  return (
    <dialog ref={dialogRef} onClose={onClose}>
      <div className="dialog__container">
      <h2>Paramètres</h2>
      <form>
        <fieldset>
        <legend>Temps de travail</legend>
        <label>{settingsInfo.workMinutes}:00 minutes</label>
        <Slider
          defaultValue={settingsInfo.workMinutes}
          onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
          variant="work"
        />
        </fieldset>
        <fieldset>
        <legend>Temps de pause</legend>
        <label>{settingsInfo.breakMinutes}:00 minutes</label>
        <Slider
          defaultValue={settingsInfo.breakMinutes}
          onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
          variant="break"
        />
        </fieldset>
      </form>
      <div>
        <Button
          type="button"
          label="Fermer"
          onClick={() => dialogRef.current.close()}
        />
      </div>
      </div>
    </dialog>
  );
}
