import { themeContext } from "./themeprovider"
import { useContext } from "react"
import TextTest from "./texttest"

const Context = () => {
    const context = useContext(themeContext)
    return (
            <div>
                <button onClick={context.toggleTheme}>Toggle theme</button>
                <TextTest/>
            </div>
    )
}

export default Context