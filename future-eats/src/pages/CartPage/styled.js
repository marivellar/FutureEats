import styled from "styled-components";
import { gray, green } from "../../constants/colors";
import Button from '@material-ui/core/Button'

export const CartHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5vh;
  margin: 5px 5px 0 5px;
  padding: 0 5px 0 5px;
`;

export const MeuCarrinho = styled.p`
  display: flex;
  justify-content: center;
`;

export const Icons = styled.img`
  width: 16.5px;
  height: 16.5px;
  border-radius: 1px;
`;

export const Texto = styled.span`
  margin: 0 5px 0 5px;
`;

export const AddressArea = styled.section`
  background-color: ${gray};
  height: 10vh;
  margin: 10px 0;
`;
export const AddressPlaceHolder = styled.p`
  color: #d6d6d6;
  font-style: italic;
  padding: 10px;
`;

export const Address = styled.p`
  color: #121212;
  padding: 10px;
`;

export const Main = styled.main`
  height: 100%;
  margin-top: 10px;
  font-weight: bold;
`;

export const Total = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextTotal = styled.p`
  margin: 10px 10px 0 10px;
  color: ${green};
  font-size: 1.2rem;
`;

export const PaymentMethod = styled.p`
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;

export const SubTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const PaymentChoice = styled.div`
    font-size: 1.2rem;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Choices = styled.label`
    margin-left: 0.9rem;
`

export const ChoicesContainer = styled.div`
    padding: 0.5rem;
`

export const ConfirmButton = styled(Button)`
    width: 80vw;
    background-color: ${green};

    &&{
      margin-bottom: 1rem;
    } 
    

`

export const Container = styled.div`
 display: flex;
 width: 100%;
 justify-content: center;
`

export const Street = styled.span`

`

export const Number = styled.span`

`

export const Neighbourhood = styled.span`

`
