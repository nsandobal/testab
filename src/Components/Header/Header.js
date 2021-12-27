import "./Header.css";
import santanderLogo from '../../Assets/santander-logo.png'

const Header = () => {
    return (
        <div id="header">
            <img id="header-logo" src={santanderLogo} alt="Logo de Santander Select"></img>
        </div>
    )
}

export default Header
