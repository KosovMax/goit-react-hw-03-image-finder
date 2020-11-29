

export default function Button({onLoad}) {
    return(
        <div style={{textAlign:"center"}}>
            <button type="button" onClick={onLoad} className="Button" >Load more</button>
        </div>
    )
}