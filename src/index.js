import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Material-UI
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
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
    primary: pink, // primaryのカラー
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
serviceWorker();
