import React from 'react'
import { ContainerHeaderPerfilPage, HeaderPerfil, Icons, Texto, Name } from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import Divider from '@material-ui/core/Divider';

const HeaderPerfilPage = () => {

    return (
        <ContainerHeaderPerfilPage>
            <HeaderPerfil>
                <div>
                    <Icons src={signal} />
                    <Texto>Sketch</Texto>
                    <Icons src={wifi} />
                </div>
                <Texto>9:41PM</Texto>
                <div>
                    <Icons src={bluetooth} />
                    <Texto>100%</Texto>
                    <Icons src={fullBattery} />
                </div>
            </HeaderPerfil>
            <Name>Meu Perfil</Name>
            <Divider />
        </ContainerHeaderPerfilPage>
    )
}

export default HeaderPerfilPage