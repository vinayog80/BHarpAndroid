import React from 'react';
import RootNavigation from './RootNavigation';
import { Provider } from 'react-redux';
import Store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={Store}>
      <RootNavigation />
    </Provider>
  );
}
