import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          margin="normal"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="on"
          variant="outlined"
        />
        <TextField
          margin="normal"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="on"
          variant="outlined"
        />
        <TextField
          margin="normal"
          label="Password"
          type="password"
          name="password"
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
          Sing up
        </Button>
      </form>
    </div>
  );
}
