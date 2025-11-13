import "./EditWindow.css"
import {useState} from "react";

export const EditWindow = ({task, onSave, onCancel}) => {
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescription, setNewDescription] = useState(task.description)

    return (
        <div className="edit-window">
            <div className="edit-window__content">
                <div className="edit-window__inputs">
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Mini input..."
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}/>
                    <textarea
                        className="textarea"
                        placeholder="Max input..."
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}/>
                </div>
                <div className="edit-window__buttons">
                    <button className="button-cancel" onClick={onCancel}>Cancel</button>
                    <button className="button-confirm" onClick={() => onSave(newTitle, newDescription)}>Save</button>
                </div>
            </div>
        </div>
    )
}