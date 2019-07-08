import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './serviceWorker';//有効だと動かない

// Material-UI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';

// Redux関連
import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import reducers from './reducers';

// Router関連
import { BrowserRouter as Router } from 'react-router-dom';

// Redux-Thunk関連（非同期データ取得用）
// import thunk from 'redux-thunk';

/*============================================================ */

// Redux設定
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Chromeのデバック用
// const composeEnhancers = compose; // 本番用


// Material-UIテーマカスタマイズ
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
    fontFamilySecondary: 'Roboto Condensed, sans-serif',
  },
});


ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <Router>{/* このRouter（もしくはBrowserRouter）で囲む */}
      <App />
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root'));
unregister();
