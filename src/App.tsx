import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { Chat } from 'components/Chat';

export const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={Chat} />
        <Route path="/chat/:id" component={Chat} />
      </HashRouter>
    </div>
  );
};
