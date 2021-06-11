import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import {BottomBar, SisterDiv} from './styles'
import {perfil,cart,home} from '../../Routes/coordinator'
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '100vw',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory()

  return (
    <>
    <SisterDiv></SisterDiv>
      <BottomBar>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} onClick={()=>home(history)} />
            <BottomNavigationAction label="Carrinho" icon={<ShoppingCartRoundedIcon />} onClick={()=>cart(history)} />
            <BottomNavigationAction label="Perfil" icon={<PersonRoundedIcon />} onClick={()=>perfil(history)}/>
        </BottomNavigation>
    </BottomBar>
    </>
  );
}