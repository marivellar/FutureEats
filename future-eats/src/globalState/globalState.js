import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'


const GlobalState = (props) => {
    const [address, setAddress] = useState({})
    const [user, setUser] = useState({})
    const [listOrders, setListOrders] = useState([])
    const [activeOrders, setActiveOrders] = useState([])
    const [getUserAddress, setGetUserAddress] = useState({})
    const [cart, setCart] = useState({products: []})
    const [shipping, setShipping] = useState([])
    

  
    const login = (body) => {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", body)
            .then((res) => {
                window.localStorage.setItem("Token", res.data.token)
            }).catch((err) => {
                console.log(err)
            })
    }

    const getOrders = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/active-order`, headers)
            .then((response) => {
                console.log(response)
                setActiveOrders(response.data)
            }).catch((response) => {
                console.log(response)
            })
    }

    const getAddress = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`, headers).then((response) => {
            setGetUserAddress(response.data.address)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getShipping = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
      
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${states.cart.restaurantId}`, headers).then((response) => {
         
        setShipping(response.data.restaurant.shipping)
        }).catch((error) => {
            console.log(error)
        })
    }


    const requests = { login, getOrders, getAddress, getShipping }
    const states = { address, user, listOrders, activeOrders, getUserAddress, cart, shipping }
    const setters = { setAddress, setUser, setListOrders, setCart, setShipping }

    const data = { requests, states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState