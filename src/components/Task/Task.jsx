import "./Task.css"
import {useState} from "react";
import {TaskTools} from "../TaskTools/TaskTools.jsx";

export const Task = ({task, onDelete, onEdit, onShare}) => {
    const [isToolsOpen, setIsToolsOpen] = useState(false)

    return (
        <li className="task">
            <div className="task__content" onClick={() => setIsToolsOpen(!isToolsOpen)}>
                <div className="text__area">
                    <p className="text__title">{task.title}</p>
                    <p className="text__description">{task.description}</p>
                </div>
                <button
                    className="button-delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(task)
                    }}
                >
                    <img src="/svg/cross-icon.svg" alt="Cross Icon"/>
                </button>
            </div>
            {isToolsOpen && (
                <TaskTools
                    task={task}
                    onEdit={onEdit}
                    onShare={onShare}
                />
            )}
        </li>
    )
}