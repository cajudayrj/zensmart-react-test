import './style.css'
import Todo from './Todo'

export default function TodoList ({items, onItemClick}) {
    return (
        <div className="todo-list">
            { items.map(item => <Todo item={item} onItemClick={onItemClick} key={item.id} />) }
        </div>
    )
}