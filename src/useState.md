function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleRegister = () => {
    console.log({
      name,
      email
    })
  }
  return (
    <div style={{ padding: 32 }}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

function App() {
  const course = [
    {
      id: 1,
      name: 'HTML, CSS'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'ReactJS'
    }
  ]
  const [check, setCheck] = useState();
  const handleSubmit = () => {
    console.log({
      id: check
    })
  }
  return (
    <div style={{ padding: 32 }}>
      {course.map(course => (
        <div key={course.id}>
          <input
            type="radio"
            checked={check === course.id}
            onChange={() => setCheck(course.id)}
          />{course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Check</button>
    </div>
  )
}

function App() {
  const course = [
    {
      id: 1,
      name: 'HTML, CSS'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'ReactJS'
    }
  ]
  const [check, setCheck] = useState([]);
  const handleSubmit = () => {
    console.log({
      id: check
    })
  }
  const handleCheck = (id) => {
    setCheck(prev => {
      const isCheck = check.includes(id)
      if (isCheck) {
        return check.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }
  return (
    <div style={{ padding: 32 }}>
      {course.map(course => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={check.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />{course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Check</button>
    </div>
  )
}

function App() {


  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });
    setJob('');
  }
  return (
    <div style={{ padding: 32 }}>
      <input value={job}
        onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  )
}