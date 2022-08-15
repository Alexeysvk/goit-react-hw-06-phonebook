import s from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteItems } from 'redux/contactSlice';


const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = contactId => dispatch(deleteItems(contactId));

  return (
    <li key={id} className={s.contactsItem}>
      <span className={s.contactText}>
        {name} : {number}
      </span>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={s.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
 name: PropTypes.string.isRequired,
 number: PropTypes.string.isRequired,
 id: PropTypes.string.isRequired,
};

export default ContactItem;