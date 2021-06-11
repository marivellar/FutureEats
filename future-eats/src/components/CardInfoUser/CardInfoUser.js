import React,{useContext} from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'
import{InfoUserContainer,NameUser,EmailUser,CpfUser} from './styles'

const CardInfoUser = () => {
    const{states} = useContext(GlobalStateContext)
    return (
        <InfoUserContainer>
            <NameUser>{states.user.name}</NameUser>
            <EmailUser>{states.user.email}</EmailUser>
            <CpfUser>{states.user.cpf}</CpfUser>
        </InfoUserContainer>
    )
}

export default CardInfoUser