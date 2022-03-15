import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </>
  );
}

export default App;
