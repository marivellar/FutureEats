import React from 'react'
import FormPropsTextFields from '../../components/inputBusca/formSearch'
import { ContainerSearchPage,SearchPageHeader,Icons,Texto,SubHeaderSearch } from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import back from '../../assets/back.png'
import Divider from '@material-ui/core/Divider';
import useProtectedPage from '../../hooks/useProtectedPage'


const SearchPage = () => {
    useProtectedPage()
    return (
        <ContainerSearchPage>
            <SearchPageHeader>
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
            </SearchPageHeader>
            <SubHeaderSearch>
                <Icons src={back}/>
                <p>Busca</p>
                <div></div>             
            </SubHeaderSearch>
            <Divider/>
            <FormPropsTextFields />
            <p>Busque por nome de restaurante</p>
        </ContainerSearchPage>
    )
}

export default SearchPage