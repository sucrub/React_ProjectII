// Event: add/remove event listener, Dom event
// Observer patter: subscribe/ unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// UseState
// Mounted/unmounted
// ===
// Call API

- Update DOM
- Call API
- Listen DOM event (scroll, resize)
- Cleanup (remove listener/unsubscribe/ clear timer)

- useEffect(callback, [deps])
    + callback là hàm ta truyền vào (luôn được gọi sau khi component mounted)
    + deps : không bắt buộc
    + cleanup function luôn được gọi trước khi component unmounted 
    + cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted) (dọn dẹp cho lần callback trước đó)
=> useEffect(callback)
    + gọi callback mỗi khi component re-render
    + gọi callback sau khi component thêm element vào DOM
=> useEffect(callback, []) // sử dụng khi có những logic (trong useEffect) chỉ muốn chạy 1 lần
    + chỉ gọi callback 1 lần sau khi component mounted
=> useEffect(callback, [...])
    + callback được gọi lại mỗi khi deps thay đổi
vd1: 
const tabs = ['posts', 'comments', 'albums']
function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {

        // document.title = title

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })


    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // setShowGoToTop(window.scrollY >= 200)
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
            } else {
                // hide
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: 'white',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => (setType(tab))}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
            {showGoToTop && (
                <button style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px'
                }}>
                    Go to top
                </button>)
            }
        </div>
    )
}

vd2: 
function Content() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>{width}</h1>
        </div>

    )
}

- useEffect với timer function
function Content() {
    const [countdown, setCountdown] = useState(180)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(countdown - 1)
        }, 1000)

        return () => {
            clearInterval(timerId)
        }
    }, [countdown])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

- useEffect với preview avatar
function Content() {
    const [avatar, setAvatar] = useState();
    useEffect(() => {

        // cleanup
        return () => {
            // thêm avatar && là để tránh bị lỗi khi tải ảnh lần đầu
            // do mới đầu thì avatar chưa có thuộc tính preview
            // url.revoke... là để xóa đi url.create... vừa tạo
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        // file ở trên là 1 object, nên dùng dòng dưới để set thêm thuộc tính
        file.preview = URL.createObjectURL(file);
        // dùng dòng dưới để re-render lại, khi ấy avatar sẽ nhận giá trị mới là file (có thuộc tính preview)
        setAvatar(file);
        // dùng dòng dưới để refresh lại value (tên ảnh), khi đấy sẽ tải được 1 ảnh 2 lần 
        e.target.value = null;
    }
    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt='' width="80%"></img>
            )}
        </div>

    )
}

- useEffect với fake chat app
import { useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: 'miss u'
    },
    {
        id: 2,
        name: 'hehe'
    },
    {
        id: 3,
        name: 'ok'
    }
]
function Content() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        // cleanup function
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                                'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

- useEffect với axios
import axios from "axios"
// với phiên bản react < 18
const [dataCovid, setDataCovid] = useState([]);
useEffect(async()=>{
    let res = await axios.get('....');
    let data = res && res.data : res.data ? [];
    setDataCovid(data);
},[])

// với phiên bản react >=18
useEffect(()=>{
    async function fetchData(){
        let res = await axios.get('....');
        let data = res && res.data : res.data ? [];
        setDataCovid(data);
    }
    fetchData();
},[])
