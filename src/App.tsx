//import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import Panel from './paginas/panel';
import { ThemeProvider } from '@emotion/react';
import { LightTheme } from './themes/Light';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={LightTheme}>
        <Panel />
      </ThemeProvider>
    </div>
  );
}

export default App;
