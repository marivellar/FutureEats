
import React, { useState, useContext } from "react";
import GlobalStateContext from "../../globalState/globalStateContext";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, RemoveButton, AddButton} from "./styles";




const RestaurantProductCard = (props) => {
    const {states, setters} = useContext(GlobalStateContext)
    const [remove, setRemove] = useState(false)

    const addToCart = () => {
            setters.setCart({
                products: [...states.cart.products, {...props.product, quantity: 1}],
                restaurantId: props.restaurant.id,
                shipping: props.restaurant.shipping
            })
            alert('Adicionado ao carrinho')     
        }
       
    console.log(states.cart)
    const removeFromCart = (id) =>{

        const newCart = states?.cart.products.filter((product) => {
              return product.id !== id
        }) 
        setters.setCart({...states.cart, products: newCart}) 
          
    } 

    const buttonRendering = (id) => {
        const checkingCart = states.cart.products.some((product) => {
            return product.id === id
        })
        
        if(checkingCart) {
            return <RemoveButton onClick={()=> removeFromCart(id)}>Remover</RemoveButton>
        } else {
            return <AddButton onClick={()=> addToCart(id)}>Adicionar</AddButton>
        }
        
    }

    
    return (
        <RestaurantProductContainer>

            <ProductCategory>{props.product.category}</ProductCategory>

            <ProductContainer>
                <ProductImg src={props.product.photoUrl} alt="foto de um dos produtos do restaurante" />
                <ProductName> {props.product.name} </ProductName>
                <ProductDescription> {props.product.description} </ProductDescription>
                <ProductPrice> R${props.product.price.toFixed(2)} </ProductPrice>
                {buttonRendering(props.product.id)}
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;