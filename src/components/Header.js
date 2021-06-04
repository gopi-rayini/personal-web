import Button from "./Button"

const Header = ({ clickFunct, pageState }) => {
    return (
        <div className="header-wrapper">
            <h1 className="title">Welcome!</h1>
            <div className="buttons-wrapper">
                {pageState.map((page) => (
                    <Button key={page.id} text={page.button} clickFunct={() => clickFunct(page.id)}/>
                ))}
            </div>
        </div>
    )
}

export default Header
