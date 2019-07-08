import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Search from '@material-ui/icons/Search';

// Route関連
import { Link } from 'react-router-dom';

// コンテナの準備
// import ShareDialog from '../containers/ShareDialog';

/*============================================================ */

// styles を定義
// theme を使わない場合は関数ではなく object でもよい
const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    zIndex: -2,
  },
  arrowDown: {
    position: 'absolute',
    bottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

//HeroImg
class HeroArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const classes = this.props;

    return (
      <section className={classes.root}>
        <Container className={classes.container}>
          <img
            src="/static/themes/onepirate/productHeroWonder.png"
            alt="wonder"
            width="147"
            height="80"
          />
          <div className={classes.background}>
            {/* Increase the network loading priority of the background image. */}
            <img style={{ display: 'none' }} src={backgroundImage} alt="" />
            <Typography color="inherit" align="center" variant="h2" marked="center">
              hogehoge
      </Typography>
            <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
              hogehogepiyopiyohogehogepiyopiyohogehogepiyopiyohogehogepiyopiyohogehogepiyopiyo
      </Typography>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              className={classes.button}
              component="a"
              href="/premium-themes/onepirate/sign-up/"
            >
              Register
      </Button>
            <Typography variant="body2" color="inherit" className={classes.more}>
              Discover the experience
      </Typography>
          </div>
          <div className={classes.backdrop} />
          <div className={clsx(classes.background)} />
          <img
            className={classes.arrowDown}
            src="/static/themes/onepirate/productHeroArrowDown.png"
            height="16"
            width="12"
            alt="arrow down"
          />
        </Container>
      </section>
    );
  }
}

class Home extends React.Component {
  render() {
    const classes = this.props;
    this.state = {
      period: '',
    };

    //期間
    const periods = ['20期下期(2019)', '21期上期(2019)', '21期下期(2020)'];

    const handleChange = event => { //あやしい
      this.setState({ [event.target.name]: event.target.value });
    };

    return (
      <div className={classes.root}>
        <HeroArea />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            期間
        </InputLabel>
          <Select
            native
            value={this.state.period}
            onChange={handleChange}
            input={
              <OutlinedInput name="period" id="outlined-age-native-simple" />
            }
          >
            {periods}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" className={classes.button}>
          検索する
      </Button>
      </div>
    );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

HeroArea.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(Home);
