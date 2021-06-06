import Button from "./Button"

const Header = ({ clickFunct, pageState }) => {
    return (
        <div className="header-wrapper">
            <div className="buttons-wrapper">
                {pageState.map((page) => (
                    <Button className={`btn`} key={page.id} clr={page.state ? 'rgba(173,255,47,.3)' : 'rgba(255,255,255,0.3)'} text={page.button} clickFunct={() => clickFunct(page.id)}/>
                ))}
            </div>
        </div>
    )
}

export default Header
