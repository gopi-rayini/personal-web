import Content from "./Content"

const Body = ({pageState}) => {
    return (
        <div className="body-wrapper">
            {
                    pageState.map((page) => ( 
                        <Content page={page}/>
                    ))
            }
        </div>
    )
}

export default Body
