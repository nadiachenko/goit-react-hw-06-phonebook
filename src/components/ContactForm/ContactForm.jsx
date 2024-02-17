import { useState } from "react"
import { useDispatch } from "react-redux";
import css from './contform.module.css'
import { addContact } from "../../redux/contactsSlice"

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };
  const recordName = (e) => {
    setName(e.currentTarget.value);
  }
  const recordNumber = (e) => {
    setNumber(e.currentTarget.value);
  }
  return (<div><h2>Phonebook</h2><form onSubmit={handleSubmit} >
    <label className={css.title}> Contact Name
      <input type="text" name="name" onChange={recordName} value={name} required /> </label>
    <label className={css.title}> Contact Phone  <input type="tel" name="number" onChange={recordNumber} value={number} required />
    </label> <button className={css.sbmbtn} type="submit" >Add Contact</button>
  </form></div>
  );
};