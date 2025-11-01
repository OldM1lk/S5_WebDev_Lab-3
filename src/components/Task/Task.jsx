import "./Task.css"

function Task({task, isTaskToolsOpen, onClick, onDelete, onShare, onEdit}) {
    return (
        <li key={task.id} className="task">
            <div className="task__content" onClick={() => onClick(task.id)}>
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
                    <img src="../../../public/svg/cross-icon.svg" alt="Cross Icon"/>
                </button>
            </div>
            <div className={`task__tools ${isTaskToolsOpen ? "" : "hidden"}`}>
                <button className="button-share" onClick={() => onShare(task.id)}>
                    <img src="../../../public/svg/share-icon.svg" alt="Share Icon"/>
                </button>
                <button className="button-info">i</button>
                <button className="button-edit" onClick={() => onEdit(task.id)}>
                    <img src="../../../public/svg/pencil-icon.svg" alt="Pencil Icon"/>
                </button>
            </div>
        </li>
    )
}

export default Task;
