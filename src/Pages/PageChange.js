import React from 'react'
import {Route, Switch} from 'react-router-dom'
import PageProfile from './PageProfile'
import PageAuto from './PageAuto'
import PageDesign from './PageDesign'
import PageContact from './PageContact'

class PageChange extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PageProfile}/>
                    <Route exact path='/auto' component={PageAuto}/>
                    <Route exact path='/design' component={PageDesign}/>
                    <Route exact path='/contact' component={PageContact}/>
                </Switch>
            </div>
        )
    }
}

export default PageChange