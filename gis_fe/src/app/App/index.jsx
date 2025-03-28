import React, {Fragment} from "react";
import Router from "@app/Router";
import { ToastContainer } from "react-toastify";
import useInitialApp from "@hooks/useInitialApp";
import "./tailwind.css"
function App(){
    window.global = window;
    useInitialApp()
    return(
        <Fragment>
            <Router></Router>
            <ToastContainer></ToastContainer>
        </Fragment>
    )

}
export default App