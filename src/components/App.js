import React from 'react'
import { BrowserRouter, Switch,  Route} from 'react-router-dom'
import BadgesNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import Layout from './Layout'
import NotFound from './NotFound'

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />       
                    <Route exact path="/badges/new" component={BadgesNew} />       
                    <Route component={NotFound} />       
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App