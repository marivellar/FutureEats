import React, { useContext } from 'react'
import InputLogin from './inputLogin/inputLogin'
import { DivPrincipal, ImgLogo } from './styles'
import brandLogo from '../../assets/brandLogo.png'
import { useInput } from '../../hooks/useInput'
import GlobalStateContext from '../../globalState/globalStateContext'
import { register } from '../../Routes/coordinator'
import { useHistory } from 'react-router'

const PaginaLogin = () => {

    const history = useHistory()

    const { requests } = useContext(GlobalStateContext)

    const { inputText, onChange } = useInput({
        email: '',
        password: ''
    })

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const body = {
            "email": inputText.email,
            "password": inputText.password
        }

        requests.login(body)

    }

    return (
        <DivPrincipal>
            <ImgLogo
                src={brandLogo}
                alt="FutureEats"
            />
            <InputLogin
                onSubmitLogin={onSubmitLogin}
                inputEmail={inputText.email}
                inputPassword={inputText.password}
                onChangeEmail={onChange}
                onChangePassword={onChange}
            />
            <p onClick={() => register(history)}>Não possui cadastro? Cadastre-se</p>
        </DivPrincipal>
    )
}

export default PaginaLogin