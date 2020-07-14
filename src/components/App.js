import React from 'react'
import { BrowserRouter, Switch,  Route} from 'react-router-dom'
import BadgesNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'

function App() {
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/badges"  component={Badges} />       
            <Route exact path="/badges/new"  component={BadgesNew} />       
            </Switch>
        </BrowserRouter>
    )
}

export default App