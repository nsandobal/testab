import { useEffect, useState } from 'react';
import axios from 'axios';
import './Content.css'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import Alert from '../Alert/Alert';

const Content = () => {
    const url = 'https://randomuser.me/api/';
    let users = []
    const [title, setTitle] = useState("Cargando...")
    const [employees, setEmployees] = useState([]);
    const [contador, setContador] = useState("Cargando...")

    const cardsContainer = document.querySelector(".cards-container")

    const maleEmployees = document.querySelector("#male-employees")
    const femaleEmployees = document.querySelector("#female-employees")

    const maleEmpButton = document.querySelector("#male-emp-button")
    const femaleEmpButton = document.querySelector("#female-emp-button")

    const [showMalesFlag, setShowMalesFlag] = useState(true)
    const [showFemalesFlag, setShowFemalesFlag] = useState(true)

    const downloadRandomUsers = async (cantidad = 7) => {
        setContador(0)
        let user;
        for (let i = 0; i < cantidad; i++) {
            user = await axios.get(url)
            users.push(formatUser(user.data.results[0]))
            await setContador(contador + 1)
        }
        await setEmployees(users)
    }

    const showMales = () => {
        setShowMalesFlag(!showMalesFlag)
        if (showMalesFlag)  {
            maleEmployees.classList.add('overflow') 
            maleEmpButton.innerHTML = "Mostrar empleados"
        } else {
            maleEmployees.classList.remove('overflow') 
            maleEmpButton.innerHTML = "Ocultar empleados"
        }
    }

    const showFemales = () => {
        setShowFemalesFlag(!showFemalesFlag)
        if (showFemalesFlag)  {
            femaleEmployees.classList.add('overflow') 
            femaleEmpButton.innerHTML = "Mostrar empleadas"
        } else {
            femaleEmployees.classList.remove('overflow') 
            femaleEmpButton.innerHTML = "Ocultar empleadas"
        }
    }

    useEffect(() => {
        console.log(employees)
        setTitle("Santander Team (" + contador + ")")
    }, [employees, contador])

    window.onload = () => downloadRandomUsers(8)

    const formatUser = (userData) => {
        let user = {}
        user.gender = userData.gender
        user.name = userData.name.first
        user.photo = userData.picture.large
        user.age = userData.dob.age
        user.tel = userData.phone
        return user
    } 

    return (
        <div id="container">
            <Alert />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat culpa, quam ipsa sit illum cupiditate dolorem. Temporibus dolorem cumque possimus eum sapiente, debitis laudantium earum nostrum! Enim, labore quisquam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi culpa perspiciatis id, sapiente soluta eligendi illo reiciendis omnis sunt iure debitis repellendus consequuntur rerum, ipsa minima incidunt. Commodi, perferendis!</p>
            <h2 className='title'>{ "Santander Team" }</h2>
            <div className='empleados empleados-flex'>
                <div className='box-container'>
                    <h2>Empleados</h2>
                    {
                        showMalesFlag &&
                        <div id='male-employees' className='cards-container overflow'>
                            { 
                                employees
                                .filter(e => e.gender === "male")
                                .map((e, i) => <EmployeeCard key={"emp"+i} name={e.name} age={e.age} photo={e.photo} tel={e.tel} />) 
                            }
                        </div> 
                    }
                    <button id="male-emp-button" onClick={showMales}>Ocultar empleados</button>
                </div>

                <div className='box-container'>
                    <h2>Empleadas</h2>
                    {
                        showFemalesFlag &&
                        <div id='female-employees' className='cards-container overflow'>
                            { 
                                employees
                                .filter(e => e.gender === "female")
                                .map((e, i) => <EmployeeCard key={"emp"+i} name={e.name} age={e.age} photo={e.photo} tel={e.tel} />) 
                            }
                        </div> 
                    }
                    <button id="female-emp-button" onClick={showFemales}>Ocultar empleadas</button>
                </div>

            </div>     
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium molestiae, nihil nulla repellendus aut debitis velit quae necessitatibus maxime voluptatibus, recusandae odio! Eaque voluptates maiores laborum repudiandae quasi beatae, est molestias, iste minus dolor repellat magni neque? Iste tenetur placeat facere maiores harum illum maxime beatae ullam quia repellendus quisquam, dicta inventore deleniti minus ipsum quos voluptas fugiat praesentium quae tempore. Nesciunt obcaecati qui cum porro error quisquam dolore neque ad, perspiciatis ipsum laudantium aspernatur at distinctio, quos excepturi mollitia eum aperiam eos iste necessitatibus voluptas harum suscipit! Distinctio, illum quidem voluptate molestiae rerum illo nobis accusamus impedit vel hic voluptatum id. Laudantium veritatis consequatur aliquid nihil ratione, obcaecati voluptate totam tempore, iusto hic ad, tempora pariatur perferendis nesciunt!</p>
            <div className='video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fkOz33So_p8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Content
