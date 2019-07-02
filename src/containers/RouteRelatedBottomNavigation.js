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
import { Link } from 'react-router-dom';
import { ContentAddCircleOutline } from 'material-ui/svg-icons';

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
  constructor() {
    super();
  }
  
  render() {
    const { classes} = this.props;
    const [value, setValue] = React.useState(0);

    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Info" icon={<InfoIcon />} />
      </BottomNavigation>
    );
  } 
}

RouteRelatedBottomNavigation.propTypes = {
  //Propsの型が書いてあって、その型の通りにデータが渡されているのかをチェックしてくれる
  //https://codezine.jp/article/detail/10729
  classes: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(RouteRelatedBottomNavigation);
