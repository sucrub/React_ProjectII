import './App.css';
import { useState } from 'react';
import Content from './components/content';
import Resize from './components/resize';
import Timer from './components/timer';
import Avatar from './components/avatar';
import Chat from './components/chat';
import Ref from './components/ref';
import Memo from './components/memo';
import HookMemo from './components/hookmemo';
import Reducer from './components/reducer';

function App() {
  const [show, setShow] = useState(false);
  const [showResize, setShowResize] = useState(false)
  const [showTimer, setShowTimer] = useState(false)
  const [showAvatar, setShowAvatar] = useState(false)
  const [showChat, setShowChat ] = useState(false)
  const [showRef, setShowRef] = useState(false)
  const [showMemo, setShowMemo] = useState(false)
  const [showHookMemo, setShowHookMemo] = useState(false)
  const [showHookReducer, setShowHookReducer] = useState(false)
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
      <br></br>
      <button onClick={() => setShowResize(!showResize)}>Resize Comp</button>
      {showResize && <Resize />}
      <br></br>
      <button onClick={() => setShowTimer(!showTimer)}>Timer</button>
      {showTimer && <Timer />}
      <br></br>
      <button onClick={() => setShowAvatar(!showAvatar)}>Avatar</button>
      {showAvatar && <Avatar />}
      <br></br>
      <button onClick={() => setShowChat(!showChat)}>Chat</button>
      {showChat && <Chat />}
      <br></br>
      <button onClick={() => setShowRef(!showRef)}>Ref</button>
      {showRef && <Ref />}
      <br></br>
      <button onClick={() => setShowMemo(!showMemo)}>Memo</button>
      {showMemo && <Memo />}
      <br></br>
      <button onClick={() => setShowHookMemo(!showHookMemo)}>HookMemo</button>
      {showHookMemo && <HookMemo />}
      <br></br>
      <button onClick={() => setShowHookReducer(!showHookReducer)}>HookReducer</button>
      {showHookReducer && <Reducer />}
    </div>
  )
}

export default App;

