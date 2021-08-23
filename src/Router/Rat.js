import React from 'react'
import { BrowserRouter , Switch,  Route} from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import  {Login}  from '../components/Login/Login'

export default function Rat() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component = {Dashboard}/>
            </Switch>
        </BrowserRouter>
    )
}
