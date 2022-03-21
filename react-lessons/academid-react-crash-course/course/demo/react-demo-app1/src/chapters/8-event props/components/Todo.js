import { useState } from "react"
import Modal from "./Modal"
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true)
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="card">
        <h2>{props.title}</h2>
        <div className="action">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}

export default Todo