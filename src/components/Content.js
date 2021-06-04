const Content = ({page}) => {
    return (
        <div>
            <p className={`${page.state ? 'show' : 'hide'}`}>{page.text}</p>
        </div>
    )
}


export default Content
