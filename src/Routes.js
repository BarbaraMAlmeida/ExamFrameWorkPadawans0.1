import { BrowserRouter,Route,Switch } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer'

import Home from "./Pages/Home";
import Post from "./Pages/Posts";
import Albuns from "./Pages/Albuns";
import ToDos from "./Pages/ToDos";
import Responses from './Pages/Responses'
import Error from "./Pages/Error";

import logo from './Img/logo.png'

//<Home  ball={ball} capa={capa}/>
const Routes = (props) => {
    return(
        <BrowserRouter>
            <Header image={logo}/>
            <Switch>
                <Route exact path='/' component={Home} /*teria que passar os parametros aqui no home para ball e capa*//>
                <Route exact path='/Posts' component={Post}/>
                <Route exact path='/Albuns' component={Albuns}/>
                <Route exact path='/ToDos' component={ToDos}/>
                <Route exact path='/Response' component={Responses}/>
                <Route path='*' component={Error}/>
            </Switch>
            <Footer image={logo}/>
        </BrowserRouter>
    )
}


export default Routes