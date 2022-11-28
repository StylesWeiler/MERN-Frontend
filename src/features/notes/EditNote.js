import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNoteById } from './notesApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditNoteForm from './EditNoteForm'

const EditNote = () => {
    const { id } = useParams() // react paramters method

    const note = useSelector(state => selectNoteById(state, id)) // select only one note
    const users = useSelector(selectAllUsers) // grab users 

    const content = note && users ? <EditNoteForm note={note} users={users} /> : <p>Loading...</p> // on load display this

    return content
}
export default EditNote

