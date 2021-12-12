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
import store from './Redux/Store/index'
import { Provider } from 'react-redux'

ReactDOM.render(
<Provider store={store}>

<BrowserRouter>

    <Route exact path="/" component = {App} />
    <Route exact path="/login" component = {Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/products/:id" component={Productdetails} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cart" component={Cart} />
    </BrowserRouter>
    </Provider>
    
, document.getElementById('root'));