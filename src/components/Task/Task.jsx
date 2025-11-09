import "./Task.css"
import {useState} from "react";
import {TaskTools} from "../TaskTools/TaskTools.jsx";

export const Task = ({task, openDeleteConfirmation}) => {
    const [isToolsOpen, setIsToolsOpen] = useState(false)

    const toggleTools = () => setIsToolsOpen(!isToolsOpen)

    return (
        <li className="task">
            <div className="task__content" onClick={toggleTools}>
                <div className="text__area">
                    <p className="text__title">{task.title}</p>
                    <p className="text__description">{task.description}</p>
                </div>
                <button className="button-delete" onClick={(e) => {
                    e.stopPropagation();
                    openDeleteConfirmation(task.id)
                }}>
                    <img src="/svg/cross-icon.svg" alt="Cross Icon"/>
                </button>
            </div>
            {isToolsOpen && (<TaskTools/>)}
        </li>
    )
}