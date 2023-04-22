import { useEffect, useState } from "react"

const lessons = [
    {
        id: 1,
        name: "ReactJS"
    },
    {
        id: 2,
        name: "SPA/MPA"
    },
    {
        id: 3,
        name: "Arrow"
    }
]

function Chat() {
    
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
      <div>
        <ul>
            {lessons.map((lesson) => (
                <li 
                    key = {lesson.id}
                    onClick = {() => setLessonId(lesson.id)}
                    style = {{
                        color: lessonId === lesson.id ? 'red' : 'black' 
                    }}
                >
                    {lesson.name}
                </li>
            ))}
        </ul>
      </div>  
    )

}

export default Chat