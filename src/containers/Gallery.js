import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import image from '../asetts/images/alex-pavlou-2UBwWeXlQKg-unsplash.jpg';

// import tileData from '../components/tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});


  const tileData = [
   {
    img: image,
     title: 'Image',
     author: 'author',
      featured: true,
      col: 2,
    },
 ];

class Gallery extends React.Component {

   render() { 
     const { classes } = this.props;

     return (
       <div className={classes.root}>
         <GridList cellHeight={200} spacing={1} className={classes.gridList}>
           {tileData.map(tile => (
             <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
               <img src={`../asetts/images/${tile.img}`} alt={tile.title} />
               <GridListTileBar
                 title={tile.title}
                 titlePosition="top"
                 actionIcon={
                   <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                     <StarBorderIcon />
                   </IconButton>
                 }
                 actionPosition="left"
                 className={classes.titleBar}
               />
             </GridListTile>
           ))}
         </GridList>
       </div>
     );
   }
 }
  
// Material-ui関連
Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Gallery);
