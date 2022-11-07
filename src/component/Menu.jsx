import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaBars, FaHome, FaRegFile, FaBuilding } from 'react-icons/fa';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem component={Link} to="/" button>
            <ListItemIcon><FaHome /></ListItemIcon>
            <ListItemText primary={'Página Inicial'} />
          </ListItem>
          <ListItem component={Link} to="/resume" button>
            <ListItemIcon><FaRegFile /></ListItemIcon>
            <ListItemText primary={'Formação Acadêmica'} />
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className="float-right">
      <button onClick={toggleDrawer('left', true)} className="mi-header-toggler" style={{ float: 'right !important' }}>
          <FaBars />
      </button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
