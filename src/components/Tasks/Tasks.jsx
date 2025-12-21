import "./Tasks.css"
import {Task} from "../Task/Task.jsx";
import {useDispatch} from "react-redux";
import {reorderUnpinned} from "../../todoSlice.js";

export const Tasks = ({tasks, onDelete, onEdit, onShare, onTogglePin}) => {
    const dispatch = useDispatch()

    if (tasks.length === 0) {
        return (
            <section className="tasks">
                <p className="tasks__empty">
                    No tasks
                </p>
            </section>
        )
    }

    const pinned = tasks.filter(t => t.isPinned)
    const unpinned = tasks.filter(t => !t.isPinned)

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index)
    }
    const handleDrop = (e, dropIndex) => {
        e.preventDefault()
        const dragIndex = parseInt(e.dataTransfer.getData('text/plain'))

        if (dragIndex !== dropIndex && dragIndex >= pinned.length && dropIndex >= pinned.length) {
            dispatch(reorderUnpinned({
                fromIndex: dragIndex - pinned.length,
                toIndex: dropIndex - pinned.length,
            }))
        }
    }
    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const orderedTasks = [...pinned, ...unpinned]

    return (
        <section className="tasks">
            <ul className="tasks__list">
                {orderedTasks.map((task, index) => (
                    <li
                        key={task.id}
                        className={`task ${task.isPinned ? 'task--pinned' : ''}`}
                        draggable={!task.isPinned}
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                    >
                        <Task
                            task={task}
                            onDelete={() => onDelete(task)}
                            onEdit={() => onEdit(task)}
                            onShare={() => onShare(task)}
                            onTogglePin={() => onTogglePin(task)}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}