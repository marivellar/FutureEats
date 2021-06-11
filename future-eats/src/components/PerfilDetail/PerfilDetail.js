import React from 'react'
import {ContainerAddress,ContainerUser,ContainerHistoric,PerfilDetailContainer} from './styles'
import CardInfoAddress from '../CardInfoAddress/CardInfoAddress'
import CardInfoUser from '../CardInfoUser/CardInfoUser'
import EditIcon from '@material-ui/icons/Edit';
import CardInfoHistoric from '../CardInfoHistoric/CardInfoHistoric';
import HeaderPerfilPage from '../HeaderPerfilPage/HeaderPerfilPage'
import {useHistory} from 'react-router-dom'
import {editAddress,editPerfil} from '../../Routes/coordinator'

const PerfilDetail = () =>{   
    const history = useHistory()
    return(
        <PerfilDetailContainer>
            <HeaderPerfilPage/>
            <ContainerUser>
                 <CardInfoUser />
                 <EditIcon onClick ={()=>editPerfil(history)}/>
            </ContainerUser>
            <ContainerAddress>
                 <CardInfoAddress/>
                 <EditIcon onClick={()=>editAddress(history)}/>
            </ContainerAddress>
            <ContainerHistoric>
                 <CardInfoHistoric />
            </ContainerHistoric>              
        </PerfilDetailContainer>
    )
}

export default PerfilDetail