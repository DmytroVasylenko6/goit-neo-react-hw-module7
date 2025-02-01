import s from './Contact.module.css'
import { FaPhone, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsOps'

const Contact = ({ contact }) => {
  const { id, name, number } = contact
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <div className={s.card}>
      <div className={s.group}>
        <div className={s.row}>
          <FaUser size={20} />
          <h2 className={s.attribute}>{name}</h2>
        </div>
        <div className={s.row}>
          <FaPhone size={20} />
          <span className={s.attribute}>{number}</span>
        </div>
      </div>
      <button onClick={handleDelete} className={s.button}>
        Delete
      </button>
    </div>
  )
}

export default Contact
