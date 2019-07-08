import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Route関連
import { Link } from 'react-router-dom';

/*============================================================ */

const ResponsiveDrawerListItem = ({ to, onClick, icon, text }) => (
  //ResponsiveDrawerからpropsとして受け取る
  <ListItem button component={Link} to={to} onClick={onClick}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

ResponsiveDrawerListItem.propTypes = {
  //Propsの型が書いてあって、その型の通りにデータが渡されているのかをチェックしてくれる
  //https://codezine.jp/article/detail/10729
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ResponsiveDrawerListItem;
