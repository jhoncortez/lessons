import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.class}>{props.text}</button>
    )
}
Button.defaultProps = {
    text: 'Add',
    class: 'btn default'
}
Button.propTypes = {
    text: PropTypes.string,
    class: PropTypes.string,
    onClick: PropTypes.func,
}

// CSS IN JS
// const headingStyle = {
//     color: 'yellow', 
//     backgroundColor: 'blue'
// }
export default Button