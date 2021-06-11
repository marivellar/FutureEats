import styled from "styled-components";


export const RestaurantContainer = styled.div`
    width: 328px;
    display: flex;
    flex-direction: column;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-bottom: 8px;
`

export const Img = styled.img`
    width: 326px;
    height: 120px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

export const Name = styled.h3`
  width: 296px;
  height: 18px;
  margin: 12px 0 4px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`

export const DeliveryContainer = styled.div`
    width: 328px;
    height: 34px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const DeliveryTime = styled.h4`
    width: 148px;
    height: 18px;
    margin: 0 8px 16px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Shipping = styled.h4`
    width: 140px;
    height: 18px;
    margin: 4px 0 16px 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
`