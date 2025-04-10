import { useContext, useRef, useEffect } from "react";
import SettingsContext from "../contexts/SettingsContext";
import Button from "./Button";
import CustomSlider from "./CustomSlider";

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
            <CustomSlider
              value={settingsInfo.workMinutes}
              onChange={(val) => settingsInfo.setWorkMinutes(val)}
              color="#f54e4e"
            />
          </fieldset>

          <fieldset>
            <legend>Temps de pause</legend>
            <label>{settingsInfo.breakMinutes}:00 minutes</label>
            <CustomSlider
              value={settingsInfo.breakMinutes}
              onChange={(val) => settingsInfo.setBreakMinutes(val)}
              color="#4aec8c"
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
