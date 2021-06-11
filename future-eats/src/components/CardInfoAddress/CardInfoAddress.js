import React,{useContext} from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'
import {
    InfoAddressContainer,
    AddressUser,
    TextAddress, 
    Number,
    Street,
    Neighbourhood,  
} from './styles'

const CardInfoAddress = () => {
    const{states} = useContext(GlobalStateContext)
    return (
        <InfoAddressContainer>
            <TextAddress>Endereço cadastrado</TextAddress>
            <AddressUser>
                <Street>{states.address.street } ,</Street>  
                <Number>{states.address.number} -</Number>  
                <Neighbourhood>{states.address.neighbourhood}</Neighbourhood>           
            </AddressUser>           
        </InfoAddressContainer>
    )
}

export default CardInfoAddress