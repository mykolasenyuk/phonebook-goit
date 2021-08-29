import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { FaUserAstronaut } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
const styles = {
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
    color: '#ffffff',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>
      <FaUserAstronaut width="32" style={styles.avatar} />

      <Button
        type="button"
        variant="contained"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </div>
  );
}
