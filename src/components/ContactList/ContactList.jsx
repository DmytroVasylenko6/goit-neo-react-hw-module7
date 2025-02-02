import Contact from '../Contact'
import s from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/selectors'

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts)

  if (!contacts.length) {
    return <p>No contacts found</p>
  }

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList
