import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
});

class Notification extends Component {
  render() {
    const classes = this.props;
    const [state, setState] = React.useState({
      period: '',//state管理するよ
    });

    //期間
    const periods = ['20期下期(2019)', '21期上期(2019)', '21期下期(2020)'];

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = prop => event => { //あやしい
      setState({ ...state, [prop]: event.target.value });
    };

  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          期間
        </InputLabel>
        <Select
          native
          value={this.state.period}
          onChange={handleChange}
          input={
            <OutlinedInput name="period" labelWidth={labelWidth} id="outlined-age-native-simple" />
          }
        >
        {periods}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
  );
  }
}

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(Notification);
