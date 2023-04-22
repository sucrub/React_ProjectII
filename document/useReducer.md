- Sử dụng useReducer (thay cho useState) khi dữ liệu phức tạp, nhiều dữ liệu...
- useReducer()
    + init state
    + action
    + reducer: là 1 hàm nhận tham số là state và action
    => mỗi khi reducer được gọi thì dựa vào state và action hiện tại để trả ra state là gì
    + dispatch: giúp action được kích hoạt -> state thay đổi -> re-render
    => khi dispatch được gọi sẽ truyền vào 1 action, useReducer lấy action này, sau đó gọi hàm reducer
vd1: const [count, dispatch] = useReducer(reducer, initState) 
-> useReducer nhận tham số là reducer và initState (nhưng khi này reducer vẫn chưa được gọi) 
-> count sẽ nhận giá trị ban đầu là initState

vd2:
// init state
const initState = 0;
// action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('invalid action')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div style={{ padding: '10px 32px' }}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
    </div>
  )
}
vd3:
// init state
const initState = {
  job: '',
  jobs: []
}
const NEW_JOB = 'new'
const ADD_JOBS = 'add'
const DELETE_JOBS = 'delete'

const setJob = (payload) => {
  return {
    type: 'new',
    payload
  }
}

const addJob = (payload) => {
  console.log(payload)
  return {
    type: 'add',
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: 'delete',
    payload
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_JOB:
      return {
        ...state,
        job: action.payload
      }

    case ADD_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }

    case DELETE_JOBS:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload, 1)
      return {
        ...state,
        jobs: newJobs
      }

    default:
      throw new Error('Invalid action')
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state
  const refInput = useRef()
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    refInput.current.focus()
  }
  return (
    <div style={{ width: 400, margin: '50px auto' }}>
      <h3>To DO</h3>
      <input
        ref={refInput}
        type="text"
        value={job}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button
        type="button"
        onClick={handleSubmit}
      >
        Add
      </button>
      <ul>
        {jobs.map((job, index) => (
          <li
            key={index}>
            {job}
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteJob(index))}
            >   X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
