import Contact from '../Contact'
import css from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectContacts, selectNameFilter } from '../../redux/selectors'

const ContactList = () => {
  const filter = useSelector(selectNameFilter).toLowerCase()
  const contacts = useSelector(selectContacts)

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  )

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>
  )
}

export default ContactList
