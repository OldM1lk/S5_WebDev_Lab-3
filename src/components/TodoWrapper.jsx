import {useEffect, useState} from "react";
import {Form} from "./Form/Form.jsx";
import {Tasks} from "./Tasks/Tasks.jsx";
import {Alert} from "./Alert/Alert.jsx";
import {EditWindow} from "./EditWindow/EditWindow.jsx";
import {ShareBox} from "./ShareBox/ShareBox.jsx";

const STORAGE_KEY = 'tasks'

export const TodoWrapper = () => {
    const [tasks, setTasks] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showShare, setShowShare] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY)
        if (data) {
            setTasks(JSON.parse(data))
            console.log(data)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title, description) => {
        const newTask = {id: Date.now(), title, description}
        console.log(newTask)
        setTasks((prev) => [...prev, newTask])
    }
    const deleteTask = id => setTasks(prev => prev.filter(t => t.id !== id))
    const editTask = (id, newTitle, newDescription) => {
        if (!newTitle.trim()) return
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? {...t, title: newTitle, description: newDescription} : t
            )
        )
    }

    const openDelete = (task) => {
        setSelectedTask(task);
        setShowAlert(true);
    }

    const openEdit = (task) => {
        setSelectedTask(task);
        setShowEdit(true);
    }

    const openShare = () => {
        setShowShare(true);
    }

    return (
        <>
            <Form onAdd={addTask}/>
            <Tasks
                tasks={tasks}
                onDelete={openDelete}
                onEdit={openEdit}
                onShare={openShare}
            />

            {showAlert && (
                <Alert
                    onConfirm={() => {
                        deleteTask(selectedTask.id)
                        setShowAlert(false)
                    }}
                    onCancel={() => setShowAlert(false)}
                />
            )}

            {showEdit && (
                <EditWindow
                    task={selectedTask}
                    onSave={(title, description) => {
                        editTask(selectedTask.id, title, description)
                        setShowEdit(false)
                    }}
                    onCancel={() => setShowEdit(false)}
                />
            )}

            {showShare && (<ShareBox onClose={() => setShowShare(false)}/>)}
        </>
    )
}