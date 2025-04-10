export default function CustomSlider({ value, onChange, color = "#f54e4e" }) {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min="1"
        max="60"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        style={{ '--slider-color': color }}
        className="custom-slider"
      />
    </div>
  );
}
