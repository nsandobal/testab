import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"
import './MainArea.css'

const MainArea = () => {
    return (
        <div id="main">
            <Sidebar />
            <Content />
        </div>
    )
}

export default MainArea
