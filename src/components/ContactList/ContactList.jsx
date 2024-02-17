import { ContactListItem } from "components/ContactListItem/ContactListItem"
import { useSelector } from "react-redux";

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts)
    const filter = useSelector(state => state.filter)
    const filerValue = filter.toString().toLowerCase()
    const filteredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filerValue));
    };

    return (
        <div> <h2>Contacts</h2>
            <ul >
                {filteredContacts().map(single => (
                    <ContactListItem
                        key={single.id}
                        id={single.id}
                        name={single.name}
                        number={single.number}
                    />
                ))}
            </ul>
        </div>
    )
}
