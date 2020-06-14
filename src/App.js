import React from 'react';
import { useRoutes } from 'hookrouter';
import { Navbar } from './components/Navbar';
import { Wrapper } from './components/Wrapper';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Portfolio } from './pages/Portfolio';

import './App.scss';

const routes = {
  '/': () => <Home />,
  '/about*': () => <About />,
  '/contact': () => <Contact />,
  '/portfolio': () => <Portfolio />,
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
