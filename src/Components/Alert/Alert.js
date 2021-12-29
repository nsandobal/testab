import './Alert.css'

const Alert = () => {
    const ocultarCookies = () => {
        let container = document.querySelector('#alert-container')
        container.classList.add('hidden-container')
    }

    return (
        <div id="alert-container">
            <p>Esta página usa cookies para almacenar información de uso para mejorar tu experiencia en nuestra web. No te preocupes, no guardamos información personal que pueda ser catalogada como sensible. Solo almacenamos datos técnicos para aumentar la eficiencia de tu navegación.</p>
            <div className="buttons">
                <button id='aceptar' onClick={ocultarCookies}>Aceptar cookies</button>
                <button id='rechazar' onClick={ocultarCookies}>¡Rechazar!</button>
            </div>
        </div> 
    )
}

export default Alert
