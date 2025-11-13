import "./Tasks.css"
import {Task} from "../Task/Task.jsx";

export const Tasks = ({tasks, onDelete, onEdit, onShare}) => {
    return (
        <section className="tasks">
            {tasks.length === 0 ? (
                <p className="tasks__empty">No tasks</p>
            ) : (
                <ul className="tasks__list">
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onShare={onShare}
                        />
                    ))}
                </ul>
            )}
        </section>
    )
}