import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageAuto from './PageAuto'
import PageContact from './PageContact'
import PageDesign from './PageDesign'
import PageProfile from './PageProfile'

class PageChange extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={PageProfile} />
                    <Route exact path='/auto' component={PageAuto} />
                    <Route exact path='/design' component={PageDesign} />
                    <Route exact path='/contact' component={PageContact} />
                </Switch>
            </div>
        )
    }
}

export default PageChange