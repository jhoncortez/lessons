
// ADDING PROPS
// const Header = (props) => {
//     return (
//         <header>
//             <h1 class="heading">{props.title}</h1>
//         </header>
//     )
// }

// ADDING ONE SINGLE PROP
// import React from 'react'
// import PropTypes from 'prop-types'

// const Header = ({title}) => {
//     return (
//         <header>
//             <h1 className="heading">{title}</h1>
//         </header>
//     )
// }

// ADDING STYLE CSS
// import PropTypes from 'prop-types'

// const Header = ({title}) => {
//     return (
//         <header>
//             {/* <h1 style={{color: 'red', backgroundColor: '#cccccc'}} className="heading">{title}</h1> */}
//             {/* <h1 style={headingStyle} className="heading">Title color 2</h1> */}
//             <h1 className="heading">{title}</h1>
//         </header>
//     )
// }

// ADDING REUSED COMPONENTS <Button />
// the <Button /> component is create in components folder,  similar to Header component.
// import PropTypes from 'prop-types'
// import Button from './Button'

// const Header = ({title}) => {
//     return (
//         <header>
//             {/* <h1 style={{color: 'red', backgroundColor: '#cccccc'}} className="heading">{title}</h1> */}
//             {/* <h1 style={headingStyle} className="heading">Title color 2</h1> */}
//             <h1 className="heading">{title}</h1>
//             <Button class="btn primary" text="Click here"/>
//             <Button class="btn secondary" text="Unclicekd"/>
//             <Button class="btn warning" text="Careful"/>
//             <Button class="btn danger" text="Dont click here"/>
//             <Button class="btn sucess" text="Clicked"/>
//             <Button class="btn info" text="Watch info"/>
//         </header>
//     )
// }

// ADDING CLick event to Button component
// the <Button /> component is create in components folder,  similar to Header component.
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header> 
            <h1 className="heading">{title}</h1>
            <Button onClick={onClick} class="btn sucess" text="Clicked"/>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     color: 'yellow', 
//     backgroundColor: 'blue'
// }
export default Header
