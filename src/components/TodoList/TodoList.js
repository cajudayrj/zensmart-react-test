import './style.css'
import Todo from './Todo'

export default function TodoList ({items, onItemClick, removeTodo}) {
    return (
        <div className="todo-list">
            { items.map(item => <Todo item={item} onItemClick={onItemClick} removeToDo={removeTodo} key={item.id} />) }
        </div>
    )
}