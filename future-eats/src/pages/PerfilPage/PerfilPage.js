import React, { useEffect, useContext } from 'react'
import { ContainerPerfilPage } from './styles'
import PerfilDetail from '../../components/PerfilDetail/PerfilDetail'
import axios from 'axios'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../globalState/globalStateContext'

const PerfilPage = () => {
    useProtectedPage()
    const{setters} = useContext(GlobalStateContext) 
    
    const getAddress = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address', headers)
            .then((response) => {               
                setters.setAddress(response.data.address)               
            })
            .catch(() => {
                alert("Não foi possível carregar os dados do usuário")
            })
    }

    const getUser = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', headers)
            .then((response) => {            
                setters.setUser(response.data.user)               
            })
            .catch(() => {
                alert("Não foi possível carregar os dados do usuário")
            })
    }

    const getOrders = () =>{
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history', headers)
            .then((response) => {              
                setters.setListOrders(response.data.orders)               
            })
            .catch(() => {
                alert("Não foi possível carregar seu histórico de pedidos")
            })
    }
    
    useEffect(() => {
        getAddress()
        getUser()
        getOrders()
    }, [])

    return (
        <ContainerPerfilPage>
            <PerfilDetail />
        </ContainerPerfilPage>
    )
}

export default PerfilPage