import "./Alert.css"

export const Alert = ({onCancelClick, onConfirmClick}) => {
    const onAlertClick = e => {
        if (e.target === e.currentTarget) {
            onCancelClick()
        }
    }

    return (
        <div className="alert" onClick={onAlertClick}>
            <div className="alert__content">
                <p className="alert__text">Delete this task?</p>
                <div className="alert__buttons">
                    <button className="button-confirm" onClick={onConfirmClick}>Yes</button>
                    <button className="button-cancel" onClick={onCancelClick}>No</button>
                </div>
            </div>
        </div>
    )
}
