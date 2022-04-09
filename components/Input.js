import inputStyles from '../styles/Input.module.css'

const Input = ({ label,name }) => {
    return(
        <div className={inputStyles.input}>
            <label htmlFor={name}>{label}:</label>
            <input type="text" name={name} id={name} />
        </div>
    )
}

export default Input