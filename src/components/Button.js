const Button = ({text, clickFunct}) => {
    return (
        <div>
            <button onClick={clickFunct}> {text} </button>
        </div>
    )
}

export default Button
