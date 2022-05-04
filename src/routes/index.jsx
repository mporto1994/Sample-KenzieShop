import { useEffect, useState } from "react";
import {Route, Switch} from "react-router";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

function Routes () {
    // const [ authenticated,  setAuthenticated] = useState(false);
    // const [user, setUser] = useState("")

    // useEffect(()=>{
    //     const token = JSON.parse(localStorage.getItem("@kenzieHub"));

    //     if (token) {
    //         return setAuthenticated(true)
    //     }

    // },[authenticated])

    return(
        <Switch>
            <Route exact path = "/">
                <Products/>
            </Route>
            <Route exact path = "/cart">
                <Cart/>
            </Route>
        </Switch>
    )
}
export default Routes;