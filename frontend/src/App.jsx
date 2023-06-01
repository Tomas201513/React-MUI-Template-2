import { useState } from 'react'
import './App.css'
// import ErrorBoundary from "./ErrorBoundary";

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from './routes';

// defaultTheme
import themes from './themes';

// project imports
import { useSelector } from 'react-redux';
import NavigationScroll from './layout/NavigationScroll';


function App() {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      {/* <ErrorBoundary> */}
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>

            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      {/* </ErrorBoundary> */}
    </StyledEngineProvider>
  );
}

export default App;