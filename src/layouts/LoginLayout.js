import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { LoginPage } from '../login/Login'
import register from '../pages/register';
import { PageA, PageB, PageC } from '../pages'

class LoginLayout extends React.Component {

    render(){
      const { match } = this.props
      console.log("match",match.path)
      return(
        <>
            <div className="login">
                <Switch>
                    <Route 
                        exact path={`${match.path}`}
                        render={(props) => <LoginPage {...props} /> }/>
                    <Route exact path={`${match.path}/register`} component={PageA} />
                    <Route path={`${match.path}/pagea`} component={PageA} />
                </Switch>
            </div>
        </>
      )
   }

 }

 LoginLayout.propTypes = {
     match: PropTypes.any.isRequired
 }

export default LoginLayout