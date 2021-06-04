const Button = ({className, clr, text, clickFunct}) => {
    return (
        <div>
            <button style={{backgroundColor: clr}} className={className} onClick={clickFunct}> {text} </button>
        </div>
    )
}

export default Button
