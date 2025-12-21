import "./TaskTools.css"

export const TaskTools = ({task, onShare, onEdit}) => {
    return (
        <div className="task__tools">
            <button
                className="button-share"
                onClick={(e) => {
                    e.stopPropagation()
                    onShare(task)
                }}>
                <img src="/svg/share-icon.svg" alt="Share Icon"/>
            </button>
            <button className="button-info">i</button>
            <button
                className="button-edit"
                onClick={(e) => {
                    e.stopPropagation()
                    onEdit(task)
                }}>
                <img src="/svg/pencil-icon.svg" alt="Pencil Icon"/>
            </button>
        </div>
    )
}