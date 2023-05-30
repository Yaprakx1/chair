import { useState } from "react";
import { useDispatch } from "react-redux";


function AddForm() {

    const dispatch =useDispatch();
    const[text,setText]=useState('');
   const handleSubmit = (e)=>{
      e.preventDefault();
    const newTodo ={ 
        id: new Date().getTime(),
        text,
        isDone:false,
        date: new Date(),
         };
     dispatch({
        type:'ADD_TODO',
        payload:newTodo,
     })

     setText('');
   };




  return (
    <form onSubmit={handleSubmit} action="">
       <input value={text}  className="mt-5 mb-4 " type="text" onChange={(e)=>setText(e.target.value)} />
       <button className="btn btn-primary">ekle</button>

    </form>
  )
}

export default AddForm;