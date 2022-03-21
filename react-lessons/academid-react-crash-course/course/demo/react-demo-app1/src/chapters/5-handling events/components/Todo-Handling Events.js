const Todo = (props) => {

  const deleteHandler = () => {
    console.log('clicked')
    console.log(props.title)
  }

  return (
    <div className="card">
        <h2>{props.title}</h2>
        <div className="action">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
    </div>
  )
}

export default Todo