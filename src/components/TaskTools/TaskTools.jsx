import "./TaskTools.css"

export const TaskTools = () => {
    return (
        <div className="task__tools">
            <button className="button-share" onClick={() => {
            }}>
                <img src="/svg/share-icon.svg" alt="Share Icon"/>
            </button>
            <button className="button-info">i</button>
            <button className="button-edit" onClick={() => {
            }}>
                <img src="/svg/pencil-icon.svg" alt="Pencil Icon"/>
            </button>
        </div>
    )
}