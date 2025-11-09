import "./Tasks.css"
import {Task} from "../Task/Task.jsx";
import {useState} from "react";
import {Alert} from "../Alert/Alert.jsx";

export const Tasks = ({tasks, deleteTask}) => {
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [currentTaskId, setCurrentTaskId] = useState(null)

    const openDeleteConfirmation = id => {
        setCurrentTaskId(id)
        setIsAlertOpen(true)
        console.log(isAlertOpen)
    }

    const closeDeleteConfirmation = () => {
        setCurrentTaskId(null)
        setIsAlertOpen(false)
        console.log(isAlertOpen)
    }

    const handleDelete = () => {
        if (currentTaskId) {
            deleteTask(currentTaskId)
            closeDeleteConfirmation()
            console.log(isAlertOpen)
        }
    }

    return (
        <>
            <section className="tasks">
                {tasks.length === 0 ? (
                    <p className="tasks__empty">No tasks</p>
                ) : (
                    <ul className="tasks__list">
                        {tasks.map((task) => (
                            <Task task={task} openDeleteConfirmation={openDeleteConfirmation}/>
                        ))}
                    </ul>
                )}
            </section>
            {isAlertOpen && (
                <Alert
                    handleClose={closeDeleteConfirmation}
                    confirm={handleDelete}
                />
            )}
        </>
    )
}