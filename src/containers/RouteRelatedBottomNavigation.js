import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Material-UI
import { withStyles } from '@material-ui/core/styles';

// Material-UI
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

// Route関連
import { Link, withRouter } from 'react-router-dom';
/*============================================================ */

// styles を定義
// theme を使わない場合は関数ではなく object でもよい
const styles = theme => ({
  root: {
    width: 500,
    [theme.breakpoints.up('md')]: {//ブレークポイントで制御
      display: 'none',
    },
  },
  button: {
    maxWidth: '100%',
  },
});

class RouteRelatedBottomNavigation extends Component {

  buttons_info = [
    { label: 'トップページ', icon: <HomeIcon />, link_to: '/' },
    { label: 'Animelとは', icon: <InfoIcon />, link_to: '/info' },
  ];

  buttons = this.buttons_info.map((button_info, index) => {
    return (
      <BottomNavigationAction
        value={button_info.link_to}
        label={button_info.label}
        className={this.props.classes.button}
        icon={button_info.icon}
        component={Link}
        to={button_info.link_to}
      />
    );
  })
  
  render() {
    const {classes} = this.props;

    return (
      <div className={classes.wrapper}>
        <BottomNavigation
          value={this.props.location.pathname}
          showLabels
          className={classes.root}
          children={this.buttons}
        />
      </div>
    );
  } 
}

RouteRelatedBottomNavigation.propTypes = {
  //Propsの型が書いてあって、その型の通りにデータが渡されているのかをチェックしてくれる
  //https://codezine.jp/article/detail/10729
  classes: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定＋Redux設定
export default withRouter(
  withStyles(styles, { withTheme: true })(RouteRelatedBottomNavigation)
);
