import {useState} from "react";
import Form from "./components/Form/Form.jsx";

function App() {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => setTasks([...tasks, task])

    return (
        <div>
            <Form onAdd={addTask}/>
        </div>
    )
}

export default App
