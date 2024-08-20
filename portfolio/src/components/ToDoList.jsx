import { useState } from "react";
import '../App.css'

function ToDoList() {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    return (
        <div className="container">
            <div className="card">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="button" onClick={addTodo}>Adicionar Tarefa</button>

                <ol>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList
