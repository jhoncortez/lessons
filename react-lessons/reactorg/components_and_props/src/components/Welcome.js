const Welcome = (props) => {
    return ( 
      <h1>Welcome {props.user}</h1>
     );
  }
const Message = (props) => {
    return ( 
      <p><b>Message:</b> {props.message}</p>
     );
}

Welcome.defaultProps = {
    user: "Jon Doe"
}
export {Welcome, Message}