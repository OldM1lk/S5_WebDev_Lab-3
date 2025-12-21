import "./Task.css"
import {useState} from "react";
import {TaskTools} from "../TaskTools/TaskTools.jsx";

export const Task = ({task, onDelete, onEdit, onShare, onTogglePin}) => {
    const [isToolsOpen, setIsToolsOpen] = useState(false)

    return (
        <>
            <div className="task__content" onClick={() => setIsToolsOpen(!isToolsOpen)}>
                <div className="task__content-pin">
                    <button
                        className="button-pin"
                        onClick={(e) => {
                            e.stopPropagation();
                            onTogglePin();
                        }}
                    >
                        {task.isPinned ? <img src="/svg/unpin-icon.svg" alt="Pin Icon"/> :
                            <img src="/svg/pin-icon.svg" alt="Pin Icon"/>}
                    </button>
                    <div className="text__area">
                        <p className="text__title">{task.title}</p>
                        <p className="text__description">{task.description}</p>
                    </div>
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
        </>
    )
}