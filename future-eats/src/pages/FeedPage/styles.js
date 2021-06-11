import styled from 'styled-components'

export const ContainerFeedPage = styled.div`
        p{
            text-align:center;
        }
` 

export const FeedPageHeader = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 5vh;
        margin: 5px 5px 0 5px;
        padding: 0 5px 0 5px;
        flex-wrap:wrap;
`
export const Icons = styled.img`
        width: 16.5px;
        height: 16.5px;
        border-radius: 1px;
`
export const Texto = styled.span`
        margin: 0 5px 0 5px;
`
export const SubHeaderFeed = styled.p`       
        text-align:center;     
       
`
export const Mainmenu = styled.div `
        display: flex;
        justify-content: center;
        flex-direction: row;
        ul{
            display: flex;
            flex-direction: row;
            justify-content:space-evenly;
            flex-wrap:wrap;
            list-style-type: none;
        }  
        li {
            margin: 0px 15px 12px 0px; 
        }
`

export const ContainerList = styled.div`
      width: 100%;
      display:flex;
      justify-content: center;
`

export const RestaurantList = styled.div`

`
