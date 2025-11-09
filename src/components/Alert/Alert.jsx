import "./Alert.css"

export const Alert = ({handleClose, confirm}) => {
    const handleClick = e => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    return (
        <div className="alert" onClick={handleClick}>
            <div className="alert__content">
                <p className="alert__text">Delete this task?</p>
                <div className="alert__buttons">
                    <button className="button-confirm" onClick={confirm}>Yes</button>
                    <button className="button-cancel" onClick={handleClose}>No</button>
                </div>
            </div>
        </div>
    )
}
