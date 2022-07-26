import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifLayouts } from './components/layouts/GifLayouts';
import { CategorieProvider } from './context/CategorieContext';
import { GifApp } from './GifApp';
import { lightTheme } from './themes';

//import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <CategorieProvider>
        <GifLayouts>
          <GifApp />
        </GifLayouts>
      </CategorieProvider>
    </ThemeProvider>
  </React.StrictMode>
);

