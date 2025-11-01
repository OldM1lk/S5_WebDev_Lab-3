import "./Tasks.css"
import Task from "../Task/Task.jsx";

function Tasks({tasks, isTaskToolsOpen, onClick, onDelete, onShare, onEdit}) {
    return (
        <section className="tasks">
            {tasks.length === 0 ? (
                <p className="tasks__empty">No tasks</p>
            ) : (
                <ul className="tasks__list">
                    {tasks.map((task) => (
                        <Task
                            task={task}
                            isTaskToolsOpen={isTaskToolsOpen}
                            onClick={onClick}
                            onDelete={onDelete}
                            onShare={onShare}
                            onEdit={onEdit}
                        />
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Tasks;
