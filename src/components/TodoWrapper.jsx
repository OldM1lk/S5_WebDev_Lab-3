import {useState} from "react";
import {Form} from "./Form/Form.jsx";
import {Tasks} from "./Tasks/Tasks.jsx";

export const TodoWrapper = () => {
    const [tasks, setTasks] = useState([])

    const addTask = task => setTasks(prev => [...prev, task])
    const deleteTask = id => setTasks(prev => prev.filter(t => t.id !== id))

    return (
        <>
            <Form addTask={addTask}/>
            <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </>
    )
}