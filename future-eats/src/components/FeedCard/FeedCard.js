import React from "react";
import {useHistory} from "react-router-dom";
import {restaurant} from "../../Routes/coordinator";
import {RestaurantContainer, Img, Name, DeliveryContainer, DeliveryTime, Shipping} from "./styles";


const FeedCard = (props) => {

    const history = useHistory()

    return (
            <RestaurantContainer onClick={()=>restaurant(history,props.restaurant.id)} >
                <Img src={props.restaurant.logoUrl} alt="Foto do restaurante"/>
                <Name>{props.restaurant.name}</Name>
                <DeliveryContainer>
                    <DeliveryTime>{props.restaurant.deliveryTime} min</DeliveryTime>
                    <Shipping>Frete R$ {props.restaurant.shipping.toFixed(2)}</Shipping>
                </DeliveryContainer>
            </RestaurantContainer>
    )
}

export default FeedCard;