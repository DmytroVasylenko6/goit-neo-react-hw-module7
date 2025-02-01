import css from './SearchBox.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../redux/selectors'

const SearchBox = () => {
  const filter = useSelector(selectNameFilter)
  const dispatch = useDispatch()
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search contact"
      value={filter}
      onChange={(e) =>
        dispatch(changeFilter(e.target.value.toLowerCase().trim()))
      }
    />
  )
}

export default SearchBox
