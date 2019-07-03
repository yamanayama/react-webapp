import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


class Home extends React.Component {
  render() {
    const classes = this.props;
    this.state = {
      period: '',
    };

    //期間
    const periods = ['20期下期(2019)', '21期上期(2019)', '21期下期(2020)'];

    const handleChange = event => { //あやしい
      this.setState({[event.target.name]: event.target.value });
    };

  return (
    <div className={classes.root}>
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

      <MyButton variant="contained" color="primary" className={classes.button}>
        検索する
      </MyButton>
    </div>
  );
  }
}

// Material-ui関連
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(Home);
