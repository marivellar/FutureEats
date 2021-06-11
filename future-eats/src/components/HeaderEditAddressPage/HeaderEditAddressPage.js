import React from 'react'
import{
    ContainerHeaderEditAddressPage,
    HeaderEditAddress,
    Icons,
    Texto,
    SubHeaderEditAddress
} from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import back from '../../assets/back.png'
import Divider from '@material-ui/core/Divider';
import {useHistory} from 'react-router-dom'
import {previousPage} from '../../Routes/coordinator'

const HeaderEditAddressPage = () => {
    const history = useHistory()
    return (
        <ContainerHeaderEditAddressPage>
            <HeaderEditAddress>
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
            </HeaderEditAddress>
            <SubHeaderEditAddress>
                <Icons src={back} onClick={()=>previousPage(history)}/>
                <p>Endereço</p>
                <div></div>
            </SubHeaderEditAddress>
            <Divider />
        </ContainerHeaderEditAddressPage>
    )
}

export default HeaderEditAddressPage