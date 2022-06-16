import LargeButton from "../LargeButton/LargeButton";

export default function Todo ({item, onItemClick, removeToDo}) {
    const setToDone = () => onItemClick(item.id);
    const removeToDoItem = () => removeToDo(item.id);
    return (
        <div className={`todo-item ${item.done ? 'done' : ''}`}>
            <p>{item.text}</p>
            <div className="cta-buttons">
                <LargeButton onClick={setToDone} disabled={item.done} text="Mark as Done" />
                <LargeButton onClick={removeToDoItem} text="Delete" />
            </div>
        </div>
    )
}