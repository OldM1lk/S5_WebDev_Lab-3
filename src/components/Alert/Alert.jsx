import "./Alert.css"

export const Alert = ({onConfirm, onCancel}) => {
    return (
        <div className="alert">
            <div className="alert__content">
                <p className="alert__text">Delete this task?</p>
                <div className="alert__buttons">
                    <button className="button-confirm" onClick={onConfirm}>
                        Yes
                    </button>
                    <button className="button-cancel" onClick={onCancel}>
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}
