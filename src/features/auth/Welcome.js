import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p> 
            {/* // time */}

            <h1>Welcome!</h1> 
            {/* // hyperlink routes */}

            <p><Link to="/dash/notes">View Tickets</Link></p>
                {/* link to the dashboard notes (AKA ticket) files */}
            <p><Link to="/dash/notes/new">Add New Ticket</Link></p>
                {/* other titles show the functionality of their link */}
            <p><Link to="/dash/users">View User Settings</Link></p>

            <p><Link to="/dash/users/new">Add New User</Link></p>

        </section>
    )

    return content
}
export default Welcome
