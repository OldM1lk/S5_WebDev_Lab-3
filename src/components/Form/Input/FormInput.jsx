import "./FormInput.css"

function FormInput({type, name, placeholder, value, onChange}) {
    return (
        <input
            className="input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default FormInput;