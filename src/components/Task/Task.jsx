import "./Task.css"
import {useState} from "react";

function Task({task, onDelete, onShare, onEdit}) {
    const [isToolsOpen, setIsToolsOpen] = useState(false);

    const handleClick = () => setIsToolsOpen(!isToolsOpen);

    return (
        <li key={task.id} className="task">
            <div className="task__content" onClick={handleClick}>
                <div className="text__area">
                    <p className="text__title">{task.title}</p>
                    <p className="text__description">{task.description}</p>
                </div>
                <button
                    className="button-delete"
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(task.id);
                    }}
                >
                    <img src="/svg/cross-icon.svg" alt="Cross Icon"/>
                </button>
            </div>
            {isToolsOpen && (
                <div className="task__tools">
                    <button className="button-share" onClick={() => onShare(task.id)}>
                        <img src="/svg/share-icon.svg" alt="Share Icon"/>
                    </button>
                    <button className="button-info">i</button>
                    <button className="button-edit" onClick={() => onEdit(task.id)}>
                        <img src="/svg/pencil-icon.svg" alt="Pencil Icon"/>
                    </button>
                </div>
            )}
        </li>
    )
}

export default Task;
