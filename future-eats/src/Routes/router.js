import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SimpleBottomNavigation from '../components/barraInferior/bottomBar'
import SearchPage from "../pages/SearchPage/SearchPage";
import Register from "../pages/Register/Register"
import Address from '../pages/Register/Address'
import PaginaLogin from "../pages/PaginaLogin/paginaLogin";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import PerfilPage from '../pages/PerfilPage/PerfilPage'
import Cart from "../pages/CartPage/Cart";
import EditAddressPage from '../pages/EditAddressPage/EditAddressPage'
import EditUserPage from '../pages/EditUserPage/EditUserPage'
import FeedPage from '../pages/FeedPage/FeedPage'

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <FeedPage/>
        <SimpleBottomNavigation />
        </Route>
        <Route exact path="/login">          
          <PaginaLogin/>
        </Route>
        <Route exact path="/cadastro">
          <Register/>
        </Route>
        <Route exact path="/endereco">
          <Address/>
        </Route>
        <Route exact path="/home">
          {/* <App /> */}
        </Route>
        <Route exact path="/carrinho">
         <Cart/>
         <SimpleBottomNavigation />
        </Route>
        <Route exact path="/busca">
          <SearchPage/>          
        </Route>
        <Route exact path="/restaurante/:id">
          <RestaurantPage />
          <SimpleBottomNavigation />
        </Route>

        <Route exact path="/perfil">
          <PerfilPage/>
          <SimpleBottomNavigation /> 
        </Route> 
        <Route exact path="/perfil/editar/endereco">
          <EditAddressPage/>         
        </Route>    
        <Route exact path="/perfil/editar/usuario">
          <EditUserPage/>         
        </Route>                  
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
