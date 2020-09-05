import React from 'react';
import { useRoutes } from 'hookrouter';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Login } from './pages/Login'

import './App.scss';

const routes = {
  '/': () => <Home />,
  '/contact': () => <Contact />,
  '/auth': () => <Login />
}

function App() {
  const match = useRoutes(routes)
  return (
    <div className="App">
      <Wrapper className="App-Wrapper">
        <Navbar />
        {match || <NotFound />}
      </Wrapper>
    </div>
  );
}

export default App;
