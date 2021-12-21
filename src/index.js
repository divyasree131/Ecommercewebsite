import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import App from './App'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import About from './Components/About'
import Cart from './Components/Cart'
import { BrowserRouter,Route } from 'react-router-dom';
import Products from './Components/Products';
import Productdetails from './Components/Productdetails';
import {store,persistor} from './Redux/Store/index'
import { Provider } from 'react-redux'
import Checkout from './Components/Checkout'
import {PersistGate} from 'redux-persist/integration/react'
import Home from './Components/Home'
ReactDOM.render(
<Provider store={store}>

<BrowserRouter>
    <PersistGate persistor={persistor}>
    <Route exact path="/" component = {App} />
    <Route exact path="/login" component = {Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={Productdetails} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/home" component = {Home} />
    <Route exact path ="/checkout" component={Checkout} />
    </PersistGate>
    </BrowserRouter>
    </Provider>
    
, document.getElementById('root'));