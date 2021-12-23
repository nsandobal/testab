import axios from 'axios';
import './Content.css'

const Content = () => {

    const [users, setUsers] = useState([])
    const url = 'https://randomuser.me/api/';

    downloadRandomUsers = () => {
        axios.get(url)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        return () => {
            downloadRandomUsers()
        }
    }, [])

    return (
        <div id="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat culpa, quam ipsa sit illum cupiditate dolorem. Temporibus dolorem cumque possimus eum sapiente, debitis laudantium earum nostrum! Enim, labore quisquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi culpa perspiciatis id, sapiente soluta eligendi illo reiciendis omnis sunt iure debitis repellendus consequuntur rerum, ipsa minima incidunt. Commodi, perferendis!</p>

        </div>
    )
}

export default Content
