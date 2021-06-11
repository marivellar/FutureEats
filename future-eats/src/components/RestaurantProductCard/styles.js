import styled from "styled-components";

export const RestaurantProductContainer = styled.div`
    display: grid;
    justify-content: center;
`

export const ProductCategory = styled.h4`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: 1px solid #000000;
  margin: 16px 0px 8px 0px;

`

export const ProductContainer = styled.div`
    width: 328px;
    height: 112px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    display:grid;
    grid-template: 1em / 97px 77px 77px 77px;
`

export const ProductImg = styled.img`
    width: 96px;
    height: 112px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    grid-column: 1/2;
`

export const ProductName = styled.h3`
    width: 167px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
    grid-column: 2/3;
    margin: 18px 0px 8px 16px;
`

export const ProductDescription = styled.h2`
    width: 200px;
    height: 30px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
    grid-column: 2/4;
    margin: 28px 0px 4px 16px;
`

export const ProductPrice = styled.h3`
    width: 118px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
    grid-column: 2/3;
    margin: 0px 0px 15px 16px;
`

export const RemoveButton = styled.button`
    width: 90px;
    height: 31px;
    color: #e02020;
    border: solid 1px #e02020;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    grid-column: 3/4;
    margin: 2px 0px 0px 63px;
`

export const AddButton = styled.button`
    width: 90px;
    height: 31px;
    color: #5cb646;
    border: solid 1px #5cb646;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    grid-column: 3/4;
    margin: 2px 0px 0px 63px;
`