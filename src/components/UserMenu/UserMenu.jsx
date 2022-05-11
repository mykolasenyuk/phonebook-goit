import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { FaUserAstronaut } from 'react-icons/fa';
// import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FiLogOut } from 'react-icons/fi';

const useStyles = makeStyles(theme => ({
  icon: {
    color: '#e1d38d',
    transition: '1s ease-out',
    '&:hover': {
      color: '#06aded',
      transform: 'rotateY(360deg)',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: '4px',
    width: '30px',
    height: '30px',
    color: '#ff7043',
    backgroundColor: '#ebf0f5',
    borderRadius: '50%',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#2ba1e7',
    textTransform: 'capitalize',
  },
}));

export default function UserMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={classes.container}>
      <span>
        Hello, <span className={classes.name}>{name}</span>
      </span>
      <FaUserAstronaut width="32" className={classes.avatar} />
      <IconButton onClick={() => dispatch(authOperations.logOut())}>
        <FiLogOut className={classes.icon} />
      </IconButton>
    </div>
  );
}
