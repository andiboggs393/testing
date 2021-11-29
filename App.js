import React, { useReducer, useState } from 'react'; 
import Love from './components/Love'

function reducer(state, action) {
  switch (action.type){
    case "add-todo":
      return { todos: [...state.todos, {text: action.text, completed: false }]
    };
    case "toggle-todo":
      return {
        todos: state.todos.map((t, idx) => idx === action.idx ? {...t, completed: !t.completed} : t)
      };
      default: return state;
  }
}

const App = () => {
  const [{todos}, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState();

  return (
    <div className="App">
      
     <form onSubmit={e => {
       e.preventDefault();
       dispatch({ type: "add-todo", text})
     }}>
       <input placeholder="title of news article" value={text} onChange={e => setText(e.target.value)}
       />
     </form>
     {todos.map((t, idx) => (
       <div key={t.text} onClick={()=> dispatch({ type:"toggle-todo", idx})} style={{textDecoration: t.completed ? 'line-through': ""}}
       >
         <Love title={text} photo=""/>
       {t.text}</div>
       
     ))}
    </div>
  );
}; 

export default App;
