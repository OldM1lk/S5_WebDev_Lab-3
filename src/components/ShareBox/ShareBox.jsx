import "./ShareBox.css"

export const ShareBox = ({onClose}) => {
    return (
        <div
            className="share-box"
            onClick={(e) => {
                e.target === e.currentTarget && onClose()
            }}
        >
            <div className="share-box__content">
                <button className="button-copy">
                    <img src="/svg/copy-icon.svg" alt="Copy Icon"/>
                </button>
                <button className="button-vk">
                    <img src="/svg/vk-icon.svg" alt="VK Icon"/>
                </button>
                <button className="button-telegram">
                    <img src="/svg/telegram-icon.svg" alt="Telegram Icon"/>
                </button>
                <button className="button-whatsapp">
                    <img src="/svg/whatsapp-icon.svg" alt="Whatsapp Icon"/>
                </button>
                <button className="button-facebook">
                    <img src="/svg/facebook-icon.svg" alt="Facebook Icon"/>
                </button>
            </div>
        </div>
    )
}