import React,{useContext} from 'react'
import { TextField, Button } from '@material-ui/core'
import HeaderEditAddressPage from '../../components/HeaderEditAddressPage/HeaderEditAddressPage'
import { ContainerForm, Container } from './styles'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../globalState/globalStateContext'
import axios from 'axios'
import { perfil } from '../../Routes/coordinator'
import {useHistory} from 'react-router-dom'

const EditAddressPage = () => {
  const history = useHistory()
  useProtectedPage()
  const{states,setters} = useContext(GlobalStateContext)  

  const onChangeEditAddress = (event)=>{
        const { value, name } = event.target;
        setters.setAddress({ ...states.address, [name]: value });
  }

  const updateAddress = (event) =>{
        event.preventDefault();
        const body ={
          street: states.address.street,
          number: states.address.number,
          neighbourhood: states.address.neighbourhood,
          city: states.address.city,
          state: states.address.state,
          complement: states.address.complement
        }

        const headers = {
          headers:{
            auth:localStorage.getItem('Token')
          }
        }

        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address', body, headers)
        .then((response)=>{          
            localStorage.setItem('Token', response.data.token)  
            alert("Endereço alterado com sucesso")
            perfil(history)         
        })
        .catch(()=>{
            alert("Não foi possível alterar seu endereço")
        })        
  }
  
  return (
    
      <Container>
        <HeaderEditAddressPage />
        <ContainerForm onSubmit={updateAddress}>
          <TextField
            variant="outlined"
            size="small"
            label="Logradouro"
            value={states.address.street}
            type="text"
            name="street"
            placeholder="Rua/Av."
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0', width: '18rem' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Número"
            value={states.address.number}
            type="text"
            name="number"
            placeholder="Número"
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Complemento"
            value={states.address.complement}
            type="text"
            name="complement"
            placeholder="Apto/Bloco"
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0' }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Bairro"
            value={states.address.neighbourhood}
            type="text"
            name="neighbourhood"
            placeholder="Bairro"
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Cidade"
            value={states.address.city}
            type="text"
            name="city"
            placeholder="Cidade"
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Estado"
            value={states.address.state}
            type="text"
            name="state"
            placeholder="Estado"
            onChange={onChangeEditAddress}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <Button type={'submit'} variant="contained" color="secondary">
            Salvar
          </Button>
        </ContainerForm>
      </Container>
      
    
  )
}

export default EditAddressPage