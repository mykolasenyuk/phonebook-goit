import { useDispatch, useSelector } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
import { FaUserAstronaut } from 'react-icons/fa'
// import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
}

export default function UserMenu() {
  const dispatch = useDispatch()
  const name = useSelector(authSelectors.getUserName)
  //   const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>
      <FaUserAstronaut width="32" style={styles.avatar} />
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  )
}
