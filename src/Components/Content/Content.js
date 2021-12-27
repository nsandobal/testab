import { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard';

const Content = () => {
    //const [users, setUsers] = useState([null, null, null, null, null])
    const url = 'https://randomuser.me/api/';
    let users = []
    const [contador, setContador] = useState(0)
    const [employees, setEmployees] = useState([]);
    const [title, setTitle] = useState("Cargando...")

    const downloadRandomUsers = async () => {
        setContador(0)
        let user
        user = await axios.get(url)
        users.push(formatUser(user.data.results[0]))
        await setContador(contador + 1)
        user = await axios.get(url)
        users.push(formatUser(user.data.results[0]))
        await setContador(contador + 1)
        user = await axios.get(url)
        users.push(formatUser(user.data.results[0]))
        await setContador(contador + 1)
        user = await axios.get(url)
        users.push(formatUser(user.data.results[0]))
        await setContador(contador + 1)
        user = await axios.get(url)
        users.push(formatUser(user.data.results[0]))
        await setContador(contador + 1)
        await setEmployees(users)
    }

    useEffect(() => {
        console.log(employees)
        setTitle("Empleados destacados (" + employees.length + ")")
    }, [employees])

    window.onload = () => downloadRandomUsers()

    const formatUser = (userData) => {
        let user = {}
        user.name = userData.name.first
        user.photo = userData.picture.large
        user.age = userData.dob.age
        user.tel = userData.phone
        return user
    } 

    return (
        <div id="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat culpa, quam ipsa sit illum cupiditate dolorem. Temporibus dolorem cumque possimus eum sapiente, debitis laudantium earum nostrum! Enim, labore quisquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi culpa perspiciatis id, sapiente soluta eligendi illo reiciendis omnis sunt iure debitis repellendus consequuntur rerum, ipsa minima incidunt. Commodi, perferendis!</p>
            <h2>{title}</h2>
            <div className='cards-container'>
                {employees.map((e, i) => {
                    return <>
                        <EmployeeCard key={"emp"+i} name={e.name} age={e.age} photo={e.photo} tel={e.tel} />
                    </>
                })}
            </div>
        </div>
    )
}

export default Content
