import "./style.css";

export default function LargeButton ({ onClick, disabled = false, type = "button", text = "Submit" }) {
    return <button type={type} className="large-button" onClick={() => onClick ? onClick() : null} disabled={disabled}>{text}</button>
}