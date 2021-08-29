import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          type="email"
          margin="normal"
          name="email"
          label="Email"
          value={email}
          onChange={handleChange}
          autoComplete="on"
          variant="outlined"
        />
        <TextField
          className={styles.textField}
          margin="normal"
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          autoComplete="on"
          variant="outlined"
        />
        <Button
          className={styles.btn}
          type="submit"
          variant="contained"
          size="large"
          color="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
