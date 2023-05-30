import { useSelector } from "react-redux"
import SingleTodo from "./SingleTodo";
import { useDispatch } from "react-redux";

const ListTodos=()=> { 
    const {todoState} =   useSelector((state)=>(state));
    const dispatch = useDispatch();
    const handleClear = ()=>{
      dispatch({
        type:'CLEAR'
      });
    }
    
  return (
    
    <div className="d-flex justify-content-between flex-wrap gap-3"  >
       <div>
        {
          todoState.todos.length > 0 ? (  <button className="btn btn-danger btn-sm" onClick={handleClear}>Tümünü Sil</button>) :  ('Liste boş')
        }
      </div>
    
     
      {
        todoState.todos.map((todo)=>(
          <SingleTodo todo={todo}  />
        ))
         
      }
      
        </div>
  );
};

export default ListTodos;