import {useState} from "react";

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
                <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="input"
                    type="text"
                    name="description"
                    placeholder="About..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button className="button-add" type="submit">
                <img src="src/assets/svg/plus-icon.svg" alt="Plus Icon"/>
            </button>
        </form>
    )
}

export default Form;