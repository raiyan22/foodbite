
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/darkTheme';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <HomePage/>
    </ThemeProvider>
  );
}

export default App;
