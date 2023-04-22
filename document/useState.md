```jsx
import {useState} from 'react'

function Component(){
    const [state, setState] = useState(initState);
    ...
}
```
### Note:
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback
- Set state là thay thế state bằng giá trị mới

// const orders = [100, 200, 300]
function App() {

  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, curl) => total + curl)
  //   console.log(total)
  //   return total;
  // });

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  const [info, setInfo] = useState({
    name: 'Hoang Anh',
    age: 18,
    address: 'Ha Noi'
  })
  const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: 'miss u'    => cách 1
    // })

    setInfo(prev => {
      return {
        ...prev,
        bio: 'miss u'
      }
    })
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>{JSON.stringify(info)}</h1>
      <button /**onClick={handleIncrease}**/ onClick={handleUpdate} >Update</button>
    </div>
  );
}

- ReactJS là one-way binding (ràng buộc một chiếu)
=> triển khai two-way binding trong React :
+ với radio: 
const courses = [
  {
    id: 1,
    name: ' HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState(2)  // mặc định khi chạy thì ô số 2 sẽ được tích

  const handleSubmit = () => {
    // call API
    console.log({ id: checked });
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

+ với checkbox
function App() {
  const [checked, setChecked] = useState([])
  console.log(checked);
  const handleSubmit = () => {
    // call API
    console.log({ ids: checked });
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //  uncheck
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

- Todo list vs useState
const storageJobs = JSON.parse(localStorage.getItem('jobs'));

  const [job, setJob] = useState('');
  // ?? : nếu vế trước null/ undefined thì lấy vế sau
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs)
      return newJobs;
    });
    setJob('');
  }
  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )

- Mounted/ unmounted (lắp vào/ tháo ra)
