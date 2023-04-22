import './App.css';
import { useStore, actions } from './store';
// import { useState } from 'react';
// import Content from './components/useEffect/content';
// import Resize from './components/useEffect/resize';
// import Timer from './components/useEffect/timer';
// import Avatar from './components/useEffect/avatar';
// import Chat from './components/useEffect/chat';
// import Ref from './components/useRef/ref';
// import Memo from './components/useMemo/memo';
// import HookMemo from './components/useMemo/hookmemo';
// import Reducer from './components/useReducer/reducer';
// import ToDoListReducer from './components/useReducer/todolistreducer';
// import Context from './components/useContext/context';

function App() {
  // const [show, setShow] = useState(false);
  // const [showResize, setShowResize] = useState(false);
  // const [showTimer, setShowTimer] = useState(false);
  // const [showAvatar, setShowAvatar] = useState(false);
  // const [showChat, setShowChat ] = useState(false);
  // const [showRef, setShowRef] = useState(false);
  // const [showMemo, setShowMemo] = useState(false);
  // const [showHookMemo, setShowHookMemo] = useState(false);
  // const [showHookReducer, setShowHookReducer] = useState(false);
  // const [showToDoList, setShowToDoList] = useState(false);
  // const [showContext, setShowContext] = useState(false);
  // return (
  //   <div style={{ padding: 32}}>
  //     <button onClick={() => setShow(!show)}>Toggle</button>
  //     {show && <Content />}
  //     <br></br>
  //     <button onClick={() => setShowResize(!showResize)}>Resize Comp</button>
  //     {showResize && <Resize />}
  //     <br></br>
  //     <button onClick={() => setShowTimer(!showTimer)}>Timer</button>
  //     {showTimer && <Timer />}
  //     <br></br>
  //     <button onClick={() => setShowAvatar(!showAvatar)}>Avatar</button>
  //     {showAvatar && <Avatar />}
  //     <br></br>
  //     <button onClick={() => setShowChat(!showChat)}>Chat</button>
  //     {showChat && <Chat />}
  //     <br></br>
  //     <button onClick={() => setShowRef(!showRef)}>Ref</button>
  //     {showRef && <Ref />}
  //     <br></br>
  //     <button onClick={() => setShowMemo(!showMemo)}>Memo</button>
  //     {showMemo && <Memo />}
  //     <br></br>
  //     <button onClick={() => setShowHookMemo(!showHookMemo)}>HookMemo</button>
  //     {showHookMemo && <HookMemo />}
  //     <br></br>
  //     <button onClick={() => setShowHookReducer(!showHookReducer)}>HookReducer</button>
  //     {showHookReducer && <Reducer />}
  //     <br></br>
  //     <button onClick={() => setShowToDoList(!showToDoList)}>ToDoList</button>
  //     {showToDoList && <ToDoListReducer />}
  //     <br></br>
  //     <button onClick={() => setShowContext(!showContext)}>Context</button>
  //     {showContext && <Context />}
  //   </div>
  // )
  const [state, dispatch] = useStore();
  const {todos, todoInput} = state;

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (
    <div>
      <input 
        value={todoInput}
        placeholder='Enter...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

