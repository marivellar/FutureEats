import React, {useEffect, useState} from 'react'
import FormPropsTextFields from '../../components/inputBusca/formSearch'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import Divider from '@material-ui/core/Divider'
import { ContainerFeedPage,FeedPageHeader,Icons,Texto,SubHeaderFeed, Mainmenu, RestaurantList, ContainerList } from './styles'
import axios from 'axios'
import useProtectedPage from '../../hooks/useProtectedPage'
import SimpleBottomNavigation from '../../components/barraInferior/bottomBar'
import FeedCard from "../../components/FeedCard/FeedCard";


const FeedPage = () => {

    const [restaurants, setRestaurants] = useState([])

    useProtectedPage()
    useEffect(() => {

        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
    
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, headers)
        .then((res) => {
            setRestaurants(res.data.restaurants)
        })

    }, [])


    const restaurantsList = restaurants?.map((detail) => {
        return <FeedCard restaurant={detail}/>
    })


    return (
        <ContainerFeedPage>
            <FeedPageHeader>
                <div>
                    <Icons src={signal} />
                    <Texto>Sketch</Texto>
                    <Icons src={wifi} />
                </div>
                <Texto>9:41PM</Texto>
                <div>
                    <Icons src={bluetooth} />
                    <Texto>100%</Texto>
                    <Icons src={fullBattery} />
                </div>
            </FeedPageHeader>
            <SubHeaderFeed>
                <p>FutureEats</p>            
            </SubHeaderFeed>
            <Divider/>
            <FormPropsTextFields />
            <Mainmenu>
                <div>
                    <ul>
                        <li>Burger</li>
                        <li>Asiática</li>
                        <li>Massas</li>
                        <li>Saudáveis</li>
                    </ul>
                </div>
            </Mainmenu>

            <ContainerList>
                <RestaurantList>{restaurantsList}</RestaurantList>
            </ContainerList>

            <SimpleBottomNavigation /> 
        </ContainerFeedPage>
    )
    
}

export default FeedPage