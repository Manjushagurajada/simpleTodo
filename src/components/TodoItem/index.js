// Write your code here
import './index.css'

const TodoItem = props => {
  const {todos, onDeleteTodo} = props
  const {title, id} = todos

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="container">
      <p>{title}</p>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
