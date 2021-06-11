import styled from 'styled-components'
import {green} from '../../constants/colors'

export const InfoHistoricContainer = styled.div`
        p{
           text-align:center;
           padding-top:16px;            
        } 
`
export const TextHistoric = styled.div`
        padding:20px 20px 5px; 
        font-size:1rem;
        font-weight:normal;
`
export const CardItemHistoric = styled.div`
       display:flex;
       flex-direction: column;
       width: 313px;
       height: 94px;
       border:1px solid rgba(0, 0, 0, 0.25);
       border-radius: 8px;
       padding: 16px 16px 4px;
       margin: 7px 16px 0;   

`
export const RestaurantName = styled.div`
       margin: 0 0 6px;
       font-size: 1rem;
       font-weight: normal;
       color:${green};
`
export const DateRequest = styled.div`
       margin: 5px 0 3px;
       font-size: 0.75rem;
       font-weight: normal;
`
export const TotalCost = styled.div`
       margin: 7px 0 3px;
       font-size: 1rem;
       font-weight: bold;
`

