import "./Tasks.css"
import {Task} from "../Task/Task.jsx";

export const Tasks = ({tasks, deleteTask}) => {
    return (
        <section className="tasks">
            {tasks.length === 0 ? (
                <p className="tasks__empty">No tasks</p>
            ) : (
                <ul className="tasks__list">
                    {tasks.map((task) => (
                        <Task task={task} deleteTask={deleteTask}/>
                    ))}
                </ul>
            )}
        </section>
    )
}