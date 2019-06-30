import React, { Component } from 'react';

// コンテナ読み込み
import Home from './containers/Home';
import Info from './containers/Info';
import Notification from './containers/Notification';
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import RouteRelatedBottomNavigation from './containers/RouteRelatedBottomNavigation';
import Settings from './containers/Settings';

// コンポーネント読み込み
import WrapMainContent from './components/WrapMainContent';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';


// 不明なRouteは全てNotFound
const NotFound = () => {
  return (
    <h2>ページが見つかりません</h2>
  );
};

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* Switchで囲むとURLにマッチされた最初の<Route>だけレンダリング */}
        <Switch>
          {/* URLでマッチさせたい要素を書いていく */}
          {/* component={Home}とかでもOK。今回はWrapMainContentでラッパーしている。 */}
          {/* exactを入れることで厳密なURL比較が可能に */}
          <Route exact path="/" component={WrapMainContent(Home)} />} />
            <Route exact path="/info" component={WrapMainContent(Info)} />
          <Route exact path="/settings" component={WrapMainContent(Settings)} />
          {/* URLヒットしないときはNot Found画面を表示する */}
          <Route component={WrapMainContent(NotFound)} />
        </Switch>
      </div>
    );
  }
}

// React-Router情報取得
export default App;
