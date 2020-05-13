import React, { Component } from 'react';

import { AppLayout } from './components/AppLayout';

// https://github.com/electron/electron/blob/master/docs/api/app.md#appgetpathname

export default class App extends Component   {
  render() {
    return (
      <AppLayout />
    );
  }
}
