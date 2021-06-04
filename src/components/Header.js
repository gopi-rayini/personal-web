import Button from "./Button"

const Header = ({text, clickFunct, pageState}) => {
    return (
        <div>
            <h1 className="title">Welcome!</h1>
            <div className="buttons-wrapper">
                {pageState.map((page) => (
                    <Button key={page.id} text={text} clickFunct={clickFunct}/>
                ))}
            </div>
        </div>
    )
}

export default Header
