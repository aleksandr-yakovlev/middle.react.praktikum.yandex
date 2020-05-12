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

function withRouterProps<T>(Component: React.ComponentType<T>) {
  return (props: T & RouteComponentProps<{ id: string }>) => {
    return <Component currentChat={props.match.params.id} {...props} />;
  };
}

class App extends React.Component<RouteComponentProps, IAppState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      userId: 'test',
    };

    this.onAuth = this.onAuth.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  onAuth(userId: string) {
    this.setState(
      () => ({
        userId: userId,
      }),
      () => history.push('/'),
    );
  }

  Logout() {
    this.setState(() => ({
      userId: null,
    }));
  }

  render() {
    const { userId } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/login"
            component={() => <LoginForm onAuth={this.onAuth} />}
          />
          <Route
            exact
            path="/register"
            component={() => <RegForm onAuth={this.onAuth} />}
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
                <Redirect to="/login" />
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
