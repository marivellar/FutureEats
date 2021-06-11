import React,{useContext} from 'react'
import {
    InfoHistoricContainer,
    TextHistoric,
    CardItemHistoric,
    RestaurantName,
    TotalCost,
    DateRequest
} from './styles'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import GlobalStateContext from '../../globalState/globalStateContext';
import format from 'date-fns/format'
import { pt } from 'date-fns/locale';


const useStyles = makeStyles({
    root: {
        border: 'none',
        height: '3px',
        margin: '0 16px',
        flexShrink: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});

const CardInfoHistoric = () => {
    const{states} = useContext(GlobalStateContext)
    const classes = useStyles();
    
    return (
        <InfoHistoricContainer>
            <TextHistoric>Histórico de pedidos</TextHistoric>
            <Divider className={classes.root} />
            {states.listOrders.length > 0 ? states.listOrders.map((order) => {
                let data = new Date(order.expiresAt)               
                let dataFormatada = format(data, 'dd MMMM yyyy', {locale: pt})       
                return (
                    <CardItemHistoric>
                        <RestaurantName>{order.restaurantName}</RestaurantName>
                        <DateRequest>{dataFormatada}</DateRequest>
                        <TotalCost>SUBTOTAL  R$ {(order.totalPrice).toFixed(2)}</TotalCost>                       
                    </CardItemHistoric>
                )
            }) : <p>Você não realizou nenhum pedido</p>}
        </InfoHistoricContainer>
    )
}

export default CardInfoHistoric