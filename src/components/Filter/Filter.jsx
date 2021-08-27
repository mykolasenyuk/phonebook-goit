import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { contactsSelectors } from '../../redux/contacts';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <input
        className={s.filterInput}
        placeholder="Find contacts"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
// const mapStateToProps = state => ({
//   value: state.phoneBook.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };
