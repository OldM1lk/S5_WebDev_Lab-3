import {useState} from "react";
import {Form} from "./Form/Form.jsx";
import {Tasks} from "./Tasks/Tasks.jsx";
import {Alert} from "./Alert/Alert.jsx";
import {EditWindow} from "./EditWindow/EditWindow.jsx";
import {ShareBox} from "./ShareBox/ShareBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, editTodo} from "../todoSlice.js";

export const TodoWrapper = () => {
    const tasks = useSelector(state => state.todos.items);
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showShare, setShowShare] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    const addTask = (title, description) => {
        dispatch(addTodo({title, description}))
    }
    const deleteTask = (id) => {
        dispatch(deleteTodo(id))
    }
    const editTask = (id, newTitle, newDescription) => {
        if (!newTitle.trim()) return;
        dispatch(editTodo({id, title: newTitle, description: newDescription}))
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

    const handleDeleteConfirm = () => {
        if (selectedTask) {
            deleteTask(selectedTask.id);
        }
        setShowAlert(false);
        setSelectedTask(null);
    }
    const handleDeleteCancel = () => {
        setShowAlert(false);
        setSelectedTask(null);
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
                    onConfirm={handleDeleteConfirm}
                    onCancel={handleDeleteCancel}
                />
            )}

            {showEdit && selectedTask && (
                <EditWindow
                    task={selectedTask}
                    onSave={(title, description) => {
                        editTask(selectedTask.id, title, description)
                        setShowEdit(false)
                    }}
                    onCancel={() => {
                        setShowEdit(false);
                        setSelectedTask(null);
                    }}
                />
            )}

            {showShare && (
                <ShareBox onClose={() => setShowShare(false)}/>
            )}
        </>
    )
}