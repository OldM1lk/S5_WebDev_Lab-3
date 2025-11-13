import {useEffect, useState} from "react";
import {Form} from "./Form/Form.jsx";
import {Tasks} from "./Tasks/Tasks.jsx";

const STORAGE_KEY = 'tasks'

export const TodoWrapper = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY)
        if (data) setTasks(JSON.parse(data))
    }, [])
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title, description) => {
        const newTask = {id: Date.now(), title, description}
        setTasks((prev) => [...prev, newTask])
    }
    const deleteTask = id => setTasks(prev => prev.filter(t => t.id !== id))
    const editTask = (id, newTitle, newDescription) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? {...t, title: newTitle, description: newDescription} : t
            )
        )
    }

    return (
        <>
            <Form addTask={addTask}/>
            <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </>
    )
}