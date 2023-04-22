import { useEffect, useState } from "react"

function Avatar() {

    const [avatar, setAvatar] = useState()

    // Xoa file khoi bo nho cache
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        e.target.value = null
    } 
 
    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            <br></br>
            {avatar && (
                <img src={avatar.preview} alt="avatar" width="20%" />
            )}
        </div>
    )
}

export default Avatar