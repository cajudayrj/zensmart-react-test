export default function Todo ({item, onItemClick}) {
    return (
        <div className={`todo-item ${item.done ? 'done' : ''}`} onClick={() => !item.done ? onItemClick() : null}>
            <p>{item.text}</p>
        </div>
    )
}