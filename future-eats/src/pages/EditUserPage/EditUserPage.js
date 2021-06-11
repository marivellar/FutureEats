import React, { useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import { ContainerForm, Container } from './styles'
import HeaderEditUserPage from '../../components/HeaderEditUserPage/HeaderEditUserPage'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../globalState/globalStateContext'
import axios from 'axios'
import { perfil } from '../../Routes/coordinator'
import {useHistory} from 'react-router-dom'

const EditUserPage = () => {
  const history = useHistory()
  useProtectedPage()
  const{states,setters} = useContext(GlobalStateContext)

  const onChangeEditUser = (event)=>{
    const { value, name } = event.target;
    setters.setUser({ ...states.user, [name]: value });
  }

  const updateUser = (event)=>{
        event.preventDefault()
        const body = {
          name: states.user.name,
          email:states.user.email,
          cpf:states.user.cpf
        }

        const headers = {
          headers:{
            auth:localStorage.getItem('Token')
          }
        }

        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', body, headers )
        .then(()=>{
              alert("Informações alteradas com sucesso") 
              perfil(history)            
        })
        .catch(()=>{
              alert("Não foi possível realizar as alterações")
        })
  }

  return (
    <Container>
      <HeaderEditUserPage />
      <ContainerForm onSubmit={updateUser} >
        <TextField
          variant="outlined"
          size="small"
          label="Nome"
          value={states.user.name}
          type="text"
          name="name"
          placeholder="Nome e sobrenome"
          onChange={onChangeEditUser}
          required
          style={{ margin: '0.5rem 0', width: '18rem' }}
        />

        <TextField
          variant="outlined"
          size="small"
          label="E-mail"
          value={states.user.email}
          type="email"
          name="email"
          placeholder="email@email.com"
          onChange={onChangeEditUser}
          required
          style={{ margin: '0.5rem 0' }}
        />

        <TextField
          variant="outlined"
          size="small"
          label="CPF"
          value={states.user.cpf}
          name="cpf"
          placeholder="000.000.000-00"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          onChange={onChangeEditUser}
          required
          style={{ margin: '0.5rem 0' }}
        />
        <Button variant="contained" color="secondary" type="submit">
          Salvar
        </Button>
      </ContainerForm>
    </Container>
  )
}

export default EditUserPage
