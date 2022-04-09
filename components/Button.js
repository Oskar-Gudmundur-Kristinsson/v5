import buttonStyle from '../styles/Button.module.css'

const Button = ({ children }) => {
    return (
        <button className={buttonStyle.button}>{children}</button>
    )
}

export default Button