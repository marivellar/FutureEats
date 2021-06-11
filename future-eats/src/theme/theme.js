import { createMuiTheme } from '@material-ui/core/styles';
import {green, gray} from '../constants/colors'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: gray,
    },
    secondary: {
      main: green,
    },
  },
});

export default theme;