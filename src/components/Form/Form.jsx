import "./Form.css"
import {useState} from "react";

export const Form = ({addTask}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (!title.trim()) return

        addTask({id: Date.now(), title, description})
        setTitle("")
        setDescription("")
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__inputs">
                <input
                    type="text"
                    className="form__input"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    className="form__input"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="button-add">
                <img src="/svg/plus-icon.svg" alt="Plus Icon"/>
            </button>
        </form>
    )
}