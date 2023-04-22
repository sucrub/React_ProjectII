import { useEffect, useState } from "react"

// 1. Update DOM

// 2. CallAPI
//useEffect(callback)
//  Goi callback moi khi component rerender -> it su dung
//  Goi callback sau khi component them element vao DOM
//useEffect(callback, [])
//  Chi goi callback 1 lan sau khi component mount
//  Su dung khi co nhung logic chi muon chay 1 lan
//useEffect(callback, [deps])
//  Callback se duoc goi lai moi khi dependencies thay doi
// Cleanup function luon duoc goi sau khi component unmount

const tabs = ['posts', 'comments', 'albums']

// Callback luon duoc goi sau khi component mount
function Content() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoTop, setShowGoTop] = useState(false)
    // Cho vao side effect de no chay ben canh viec render chinh
    // Neu de ben ngoai thi thao tac nay ma cham tre, viec render cung se bi delay
    // Uu tien render cho client
    // useEffect(() => {
    //     document.title = title;
    // })

    // khong dung useEffect thi no goi 2 lan do reactjs co strictmode
    // re-render 1 lan thi goi api 2 lan
    // Su dung useEffect thi strictmode khong goi 2 lan api nhung moi lan re-render deu goi lai
    useEffect(() => {
        document.title = title;
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            setShowGoTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll)

        //Cleanup function
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
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {}}
                    onClick={() => setType(tab)}
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
                    <li key={post.id}>{post.title || post.body}</li>
                ))}
            </ul>
            {
                showGoTop && (
                    <button
                        style={{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        Go to Top
                    </button>
                )
            }
        </div>
    )

}

export default Content