const Body = ({pageState}) => {
    return (
        <div>
            {
                pageState.map((pages) => ( 
                    pages.state && <li key={(pages.id)+1}>{pages.text}</li> 
                ))
            }
        </div>
    )
}

export default Body
