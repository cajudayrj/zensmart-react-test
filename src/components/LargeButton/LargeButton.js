import "./style.css";

export default function LargeButton ({ onClick, disabled = false }) {
    return <button className="large-button" onClick={() => onClick()} disabled={disabled}>Mark as Done</button>
}