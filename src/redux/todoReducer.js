


const initialState={
    todos:[],
};

const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
        return{
          todos:[...state.todos,action.payload],
        };
        case 'DEL_TODO':
            const filteredTodos =  state.todos.filter((item)=>item.id !==action.payload);
        return{
          todos:filteredTodos,
        };
         case 'EDİT_TODO':
         const cloneTodos = [state.todos]

         const index = state.todos.findIndex((item)=> item.id === action.payload);
          
         cloneTodos.splice(index,1,{...state.todos[index],isDone:!state.todos[index].isDone});

         return{
            todos:cloneTodos,
         }
        case 'CLEAR':
          return{
            todos:[],
          };

        default :
        return state;
    }
 
}

export default todoReducer;

