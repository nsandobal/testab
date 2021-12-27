import './EmployeeCard.css'

const EmployeeCard = (props) => {
    return (
        <div className="employee-card">
            <img className="employee-photo" src={props.photo} alt={"Foto de " + props.name}></img>
            <li className='employee-data'>{props.name}</li>
            <li className='employee-data'>{props.age}</li>
            <li className='employee-data'>{props.tel}</li>
        </div>
    )
}

export default EmployeeCard
