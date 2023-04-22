import { useContext } from "react";
import { themeContext } from "./themeprovider";

const Paragraph = () => {

    const context = useContext(themeContext);

    console.log(context.theme);
    return (
        <h1 className={context.theme}>askfsaklfdasjfaljasflsajflajf;lsadjsa;ldsald</h1>
    )
}

export default Paragraph