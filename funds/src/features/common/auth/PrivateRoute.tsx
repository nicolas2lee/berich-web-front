// @ts-nocheck
import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

class PrivateRoute extends React.Component{

    render() {
        const {authenticated} = this.props
        if (authenticated) {
            return this.props.children;
        }else {
            return this.props.children;
      /*      return (
                <Route>
                    <Redirect to='/login' />
                </Route>
            );*/
        }
    }
}
/*function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render = {
                ({ location }) =>
                    fakeAuth.isAuthenticated ? (children) :
                        (<Redirect to={{ pathname: "/login", state: { from: location } }}/>)
            }
        />
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};*/

const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated
});
export default connect(mapStateToProps)(PrivateRoute);