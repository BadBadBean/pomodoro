export default function Button({ type, label, onClick, buttonClass }) {
  const className = `btn ${buttonClass ? buttonClass : ""}`
    return (
      <button type={type} onClick={onClick} className={className}>
        {label}
      </button>
    )
}
