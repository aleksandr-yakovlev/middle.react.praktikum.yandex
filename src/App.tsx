import React from 'react';
import {
  RouteComponentProps,
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';

import { history } from 'history-route';

import { Chat } from 'components/Chat';
import { LoginForm } from 'components/LoginForm';
import { RegForm } from 'components/RegForm';

export interface IAppState {
  userId: string | null;
}

type userType = Record<string, { fname: string; lname: string; pwd: string }>;

function withRouterProps<T>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps<{ id: string }>) => {
    return <Component currentChat={props.match.params.id} {...props} />;
  };
}

class App extends React.Component<RouteComponentProps> {
  readonly state: IAppState = {
    userId: null,
  };

  private users: userType = {
    test: {
      fname: 'Test',
      lname: 'Testov',
      pwd: 'test',
    },
  };

  onAuth = (userId: string, previousPage: string = '/') => {
    this.setState(
      () => ({
        userId: userId,
      }),
      () => history.push(previousPage),
    );
  };

  checkAuth = (
    uname: string,
    pwd: string,
  ): { uValid: boolean; pValid: boolean } => {
    const uValid: boolean = !!this.users[uname];
    const pValid: boolean = uValid && this.users[uname].pwd === pwd;
    return {
      uValid: uValid,
      pValid: pValid,
    };
  };

  createUser = (uname: string, fname: string, lname: string, pwd: string) => {
    this.users[uname] = {
      fname: fname,
      lname: lname,
      pwd: pwd,
    };
    this.onAuth(uname);
  };

  Logout = () => {
    this.setState(() => ({
      userId: null,
    }));
  };

  render() {
    const { userId } = this.state;
    const { ...routeProps } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/login"
            component={() => (
              <LoginForm
                onAuth={this.onAuth}
                checkAuth={this.checkAuth}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/register"
            component={() => <RegForm createUser={this.createUser} />}
          />
          <Route
            path="/"
            component={() =>
              userId ? (
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => (
                      <Chat Logout={this.Logout} userId={userId} />
                    )}
                  />
                  <Route
                    path="/chat/:id"
                    component={withRouterProps((props) => (
                      <Chat Logout={this.Logout} userId={userId} {...props} />
                    ))}
                  />
                </Switch>
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { previousPage: this.props.location.pathname },
                  }}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const appHoc = withRouter(App);

export { appHoc as App };
