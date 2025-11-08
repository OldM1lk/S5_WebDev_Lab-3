import {useState} from "react";
import "./Form.css"
import FormInput from "./Input/FormInput.jsx";
import AddButton from "./Button/AddButton.jsx";

function Form({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onAdd({id: Date.now(), title, description});
        setTitle("");
        setDescription("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__inputs">
                <FormInput
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <FormInput
                    type="text"
                    name="description"
                    placeholder="About..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <AddButton/>
        </form>
    )
}

export default Form;