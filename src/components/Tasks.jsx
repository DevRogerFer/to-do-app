import { useState } from "react"
import Header from "./Header"

function Tasks() {
  const [inputValue, setInputValue] = useState()
  const [messages, setMessages] = useState([
    "Hello World",
    "Welcome to React",
    "Have a great day!",
  ])
  function handleButtonClick() {
    setMessages([...messages, inputValue])
  }

  return (
    <div>
      <Header>
        <h1>Add a task</h1>
      </Header>

      <input
        className="input"
        type="text"
        placeholder="Create your task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="button" onClick={handleButtonClick}>
        Add task
      </button>

      <Header>
        <h1>My Tasks</h1>
      </Header>

      <div>
        <ul>
          {messages.map((message) => {
            return <li key={message}>{message}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Tasks
