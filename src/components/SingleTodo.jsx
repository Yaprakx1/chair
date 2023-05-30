import React from 'react'
import { useDispatch} from 'react-redux';

function SingleTodo({todo}) {
   const dispatch = useDispatch()
  const handleDelete=()=>{
     dispatch({
        type:'DEL_TODO',
        payload:todo.id,
     })
  }
  const handleEdit=()=>{
    dispatch({
      type:'EDİT_TODO',
      payload:todo.id,
    })
  }

  return (
    
    <div className="card " style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{todo.text}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{todo.isDone ? 'Tamamlandı':'Devam ediyor'}</h6>
    <p className="card-text">{new Date(todo.date).toLocaleDateString()}</p>
    <a  className="card-link p-4"onClick={handleEdit}>{todo.isDone ? 'Geri Al':'Tamamla'}</a>
    
    <a  className="card-link" onClick={handleDelete}>Sil</a>
  </div>
</div>
  )
}

export default SingleTodo;