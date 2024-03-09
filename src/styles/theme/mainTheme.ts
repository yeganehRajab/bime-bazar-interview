import { createTheme } from '@mui/material/styles';
import typographyShared from './typography';

const mainTheme = createTheme({
  direction: 'rtl',
  typography: typographyShared,
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default mainTheme;
