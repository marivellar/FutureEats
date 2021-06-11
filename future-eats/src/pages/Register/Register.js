import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import axios from 'axios'
import { login, address } from '../../Routes/coordinator'
import { useHistory } from 'react-router'
import {
  InputLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import Logo from '../../assets/brandLogo.png'
import {
  Title,
  ContainerForm,
  Container,
  ImageLogo,
  MessageRegister,
} from './styles'

function Register() {
  const history = useHistory()

  // hook de formulário
  const { inputText, onChange, clearInput } = useInput({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  })

  // Paginação, a página do cadastro só é acessível por meio do form de endereço preenchido
  // const [changePage, setChangePage] = useState(false)
  const [message, setMessage] = useState('')

  //visibilidade das senhas
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const clickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const clickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  // Validação das senhas
  const validation = (event) => {
    const password = inputText.password
    const confirmationPassword = inputText.confirmPassword
    event.preventDefault()

    if (
      inputText !== '' &&
      inputText.email !== '' &&
      inputText.cpf !== '' &&
      password === confirmationPassword &&
      password.length >= 6
    ) {
      axios
        .post(
          'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup',
          inputText,
        )
        .then((answer) => {
          window.localStorage.setItem('Token', answer.data.token)
          alert('Cadastro feito com sucesso')
          setMessage(
            <MessageRegister>
              
              <p>🎉Cadastrado com sucesso! </p>
               <p>Vamos cadastrar seu endereço?
                <strong onClick={() => address(history)}>aqui</strong>
              </p>
            </MessageRegister>,
          )
        })
        .catch(() => {
          alert('Usuário já consta como cadastrado')
          setMessage(
            <MessageRegister>
              <p>Usuário já cadastrado</p>
              <p>Tente login <strong onClick={() => login(history)}>aqui</strong></p>
            </MessageRegister>
          )
          clearInput()
        })
    } else {
      alert('Por favor, confira sua senha')
      clearInput()
    }
  }

  return (
    <>
      <Container>
        <ImageLogo src={Logo} alt={'labe-food logo'} />

        <ContainerForm onSubmit={validation}>
          <Title>Cadastrar</Title>

          <TextField
            color="secondary"
            variant="outlined"
            size="small"
            label="Nome"
            value={inputText.name}
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            onChange={onChange}
            required
            style={{ margin: '0.5rem 0', width: '18rem' }}
          />

          <TextField
            color="secondary"
            variant="outlined"
            size="small"
            label="E-mail"
            value={inputText.email}
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={onChange}
            required
            style={{ margin: '0.5rem 0' }}
          />

          <TextField
            color="secondary"
            variant="outlined"
            size="small"
            label="CPF"
            value={inputText.cpf}
            name="cpf"
            placeholder="000.000.000-00"
            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
            onChange={onChange}
            required
            style={{ margin: '0.5rem 0' }}
          />

          <FormControl
            color="secondary"
            variant="outlined"
            required="true"
            style={{ margin: '0.5rem 0' }}
          >
            <InputLabel htmlFor="outlined-adornment-password" margin="dense">
              Senha
            </InputLabel>

            <OutlinedInput
              margin="dense"
              label="Senha"
              value={inputText.password}
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Mínimo 6 caracteres"
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={clickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            color="secondary"
            variant="outlined"
            required="true"
            style={{ margin: '0.5rem 0' }}
          >
            <InputLabel htmlFor="outlined-adornment-password" margin="dense">
              Confirmar
            </InputLabel>

            <OutlinedInput
              margin="dense"
              label="Confirmar"
              value={inputText.confirmPassword}
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirme a senha anterior"
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={clickShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Button type="submit" variant="contained" color="secondary">
            Criar
          </Button>
        </ContainerForm>
        {message}
      </Container>
    </>
  )
}

export default Register
