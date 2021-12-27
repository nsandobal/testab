import './EmployeeCard.css'

const EmployeeCard = (props) => {
    return (
        <div className="employee-card">
            <img className="employee-photo" src={props.photo} alt={"Foto de " + props.name}></img>
            <div className='employee-data'>
                <li id="name">{props.name}</li>
                <li>{props.age} años</li>
                <li>{props.tel}</li>
            </div>
        </div>
    )
}

export default EmployeeCard
