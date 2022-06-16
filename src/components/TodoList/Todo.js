import LargeButton from "../LargeButton/LargeButton";

export default function Todo ({item, onItemClick}) {
    const callToAction = () => onItemClick(item.id);
    return (
        <div className={`todo-item ${item.done ? 'done' : ''}`}>
            <p>{item.text}</p>
            <LargeButton onClick={callToAction} disabled={item.done} />
        </div>
    )
}