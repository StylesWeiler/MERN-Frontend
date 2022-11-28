import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {
    useEffect(() => { // prepepping for a fetch method call
        console.log('subscribing') 
        const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate())// initializes notes received from Mongo
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate()) // initializes users received from Mongo

        return () => {
            console.log('unsubscribing')
            notes.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch