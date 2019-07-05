import React, { Component } from 'react';

// コンテナ読み込み
import Home from './containers/Home';
import Info from './containers/Info';
import Gallery from './containers/Gallery';
import ResponsiveDrawer from './containers/ResponsiveDrawer';
import RouteRelatedBottomNavigation from './containers/RouteRelatedBottomNavigation';
import Settings from './containers/Settings';

// コンポーネント読み込み
// import WrapMainContent from './components/WrapMainContent';

// 共通スタイル読み込み
import './App.css';

// Route関連
import { Route, Switch } from 'react-router-dom';

/*============================================================ */

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
        <ResponsiveDrawer className="ResponsiveDrawer">
          {/* Switchで囲むとURLにマッチされた最初の<Route>だけレンダリング */}
          <Switch>
            {/* URLでマッチさせたい要素を書いていく */}
            {/* component={Home}とかでもOK。今回はWrapMainContentでラッパーしている。 */}
            {/* exactを入れることで厳密なURL比較が可能に */}
            <Route exact path="/" component={Home} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/settings" component={Settings} />
            {/* URLヒットしないときはNot Found画面を表示する */}
            <Route component={NotFound} />
            </Switch>
          </ResponsiveDrawer>
        <RouteRelatedBottomNavigation />
      </div>
    );
  }
}

/*> つまり、基本的にピュアなcomponentはfunctionで作っていき、state管理が必要な場合にのみclassに格上げしていくというように作っていけばよい

はい。その方針で問題ないかと思います。

たとえば状態管理に redux を使った SPA では、ある画面の画面全体をくくる<div />は、おそらくclass で作ることになると思いますが、
その画面で state を持つコンポーネントが、全体をくくるそれ1つだけだと、小さい画面要素へのprops 渡しが煩雑すぎるということになれば、
どこか適切な領域に state を持たせる、という算段になるかと思います。
なので、

なるべくピュアなcomponentで作るようにするには、画面上のどこを state を持った描画要素として見るか、という見極めが肝になってくる */

// React-Router情報取得
export default App;
