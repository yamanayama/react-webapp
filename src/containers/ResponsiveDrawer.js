import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

// Material-UI
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ShareIcon from '@material-ui/icons/Share';

// Route関連
import { Link } from 'react-router-dom';

// コンテナの準備
// import ShareDialog from '../containers/ShareDialog';

// コンポーネントの準備
import ResponsiveDrawerListItem from '../components/ResponsiveDrawerListItem';

/*============================================================ */

// styles を定義
// theme を使わない場合は関数ではなく object でもよい
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: { 
    marginLeft: drawerWidth,
    background: '#111',
    [theme.breakpoints.up('sm')]: {//ブレークポイントで制御
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  // ヘッダーロゴ
  headerLogo: {
    display: 'flex',
    textAlign: 'center',
    flexDirection:'center',
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNav: false,
      isOpenSharebtn: false,
    };
  }

  //Nav
  bandleOpenNav = () => {
    this.setState({
      isOpenNav: true
    });
    console.log(this.bandleOpenNav);
  }
  bandleOpenNav = () => {
    this.setState({ isOpenNav: true });
    console.log(this.bandleCloseNav);
  }

  bandleCloseNav = () => {
    this.setState({ isOpenNav: false });
    console.log(this.bandleCloseNav);
  }
  //shareボタン
  // shareDialogToggle = () => {
  //   this.setState({ isOpenSharebtn: true });
  //   console.log(this.shareDialogToggle);
  // }
  // bandleCloseSharebtn = () => {
  //   this.setState({ isCloseSharebtn: true });
  //   console.log(this.bandleCloseSharebtn);
  // }

  // シェアボタン挙動
  shareDialogToggle = () => {
    this.setState({ shareDialogOpen: !this.state.shareDialogOpen });
  }

  render() {
    const { classes, theme, container } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          <ResponsiveDrawerListItem
            to='/info'
            onClick = {this.bandleCloseNav}
            icon = {<InfoIcon/>}
            text='○○とは'
          />
        </List>
        <Divider />
       <List>
          <ResponsiveDrawerListItem
            to='/'
            onClick = {this.bandleCloseNav}
            icon = {<HomeIcon/>}
            text='トップページ'
          />
        </List>
        <Divider/>
        <List>
          <ResponsiveDrawerListItem
            to='/settings'
            onClick = {this.bandleCloseNav}
            icon={<SettingsIcon/>}
            text='設定'
          />
        </List>
      </div>
    );
    
    {/*header記述 */ }
    return (
      <div className={classes.root}>
        <CssBaseline /> {/*The rest of your application */ }
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className = {classes.toolBar}
          variant = "dense" >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={this.bandleOpenNav}//thisで取らないと動かない
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <Typography variant="h6" className={classes.headerLogo} noWrap>
                タイトルタイトル
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="Mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.isOpenNav} //thisで取らないと動かない
              onClose={this.bandleCloseNav}//thisで取らないと動かない
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  //Propsの型が書いてあって、その型の通りにデータが渡されているのかをチェックしてくれる
  //https://codezine.jp/article/detail/10729
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  container: PropTypes.object,
};

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
