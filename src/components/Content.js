import Button from "./Button"

const Content = ({page}) => {
    return (
        <div>
            <div className={`content ${page.state ? 'show' : 'hide'}`}>

                {page.id === 1 && 
                 <div className={page.button}>
                    I am Home bitch
                 </div>
                }

                {page.id === 2 && 
                 <div className={page.button}>
                    <Button text="Skills"/>
                    <Button text="Experience"/>
                    <Button text="Projects"/>
                 </div>
                }

                {page.id === 3 && 
                 <div className={page.button}>
                    <input className="email" placeholder="E-mail"></input>
                    <textarea className="message" placeholder="Message"></textarea>
                    <Button className="send" text="SEND"/>
                 </div>
                }

            </div>
        </div>
    )
}


export default Content
