import { deleteContact } from "../../redux/contactsSlice"
import { useDispatch } from "react-redux";
import css from './cli.module.css'

export const ContactListItem = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (<li className={css.list}>
    <p>{name}: {number}</p>
    <button className={css.dltbtn} onClick={handleDelete}>Delete Contact</button>
  </li>);

}