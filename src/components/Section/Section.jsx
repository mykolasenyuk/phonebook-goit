import PropTypes from 'prop-types';
import s from './Section.module.css';
import { FcContacts } from 'react-icons/fc';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        {title === 'Phonebook' && <FcContacts className={s.icon} />}
        {title}
      </h2>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
