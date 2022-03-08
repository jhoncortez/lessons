import React, { useState } from 'react'

const AddTask = (props) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        props.onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            {console.log(text)}
            <div className='form-control'>
                <label>Tasks</label>
                <input className="field-text" type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={(reminder) ? 'checked': ''} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
