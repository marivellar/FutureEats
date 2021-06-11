import {useHistory} from 'react-router-dom'
import {useLayoutEffect} from 'react'
import {login} from '../../src/Routes/coordinator'


const useProtectedPage = () => {
    const history = useHistory()

    useLayoutEffect(() => {
        const token = localStorage.getItem('Token')
        if (!token) {
            login(history)
        }
    }, [history])
}

export default useProtectedPage;