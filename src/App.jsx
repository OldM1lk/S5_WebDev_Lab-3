import {useState} from "react";
import {Form} from "./components/Form/Form.jsx";
import Tasks from "./components/Tasks/Tasks.jsx";

function App() {
    const [tasks, setTasks] = useState(() => {
        const data = localStorage.getItem("tasks");
        return data ? JSON.parse(data) : [];
    });
    const handleAddTask = (task) => {
        setTasks((prev) => [...prev, task]);
    };

    const handleDeleteTask = (id) => console.log("Delete: ", id);
    const handleShareTask = (id) => console.log("Share: ", id);
    const handleEditTask = (id) => console.log("Edit : ", id);

    return (
        <div>
            <Form onAdd={handleAddTask}/>
            <Tasks
                tasks={tasks}
                onDelete={handleDeleteTask}
                onShare={handleShareTask}
                onEdit={handleEditTask}
            />
        </div>
    )
}

export default App
