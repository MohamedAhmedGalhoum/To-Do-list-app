import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
export const TodosForm = ({addNewTodo , toggleFilter , mode , activeToDo}) => {
  const defaultTitle = mode === 'edit' ? activeToDo.title : ''
  const [title , setTitle] = useState('')
  const [editRender , setEditRender] = useState(false)

  if(mode === 'edit' && !editRender){
    setTitle(activeToDo.title)
    setEditRender(true)
  }

  const handelInputChange = (e) =>{
    setTitle(e.target.value)
  }

  const handelAddNewToDo = () => {
    setEditRender(false)
    if(!title.trim()){
      return
    }
    addNewTodo(title)
    setTitle('')
  }

  return (
    <div className='todos-form'>
      <div className = {`todos-form_icon ${mode === 'filter' ? 'active' : ''}`} onClick={toggleFilter}>
        <FeatherIcon icon = "circle"/>
      </div>
      <div className='todos-form_form'>
      <input type="text" placeholder="اضف مهمة جديدة ..." value = {title} onChange={handelInputChange}/>
      </div>
      <div className='todos-form_submit'>
        <button className='btn' disabled = {!title.trim()} onClick={handelAddNewToDo}> 
        {
          mode === 'edit' ? 'تعديل' : 'اضافة'
        }
        </button>
      </div>
    </div>
  )
}

export default TodosForm;
