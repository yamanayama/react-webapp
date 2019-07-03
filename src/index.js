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
    type: 'light', // light or dark
    primary: grey, // primaryのカラー
    secondary: blue, // secondaryのカラー
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
