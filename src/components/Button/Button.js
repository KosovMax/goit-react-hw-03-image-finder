import PropTypes from 'prop-types';

export default function Button({onClick, children, allyProps}) {
    return(
        <div style={{textAlign:"center"}}>
            <button type="button" onClick={onClick} className="Button" {...allyProps}>{children}</button>
        </div>
    )
}

Button.defaultProps = {
    onClick:()=>null,
    children:null
}

Button.propTypes = {
    onClick:PropTypes.func,
    children:PropTypes.node
}