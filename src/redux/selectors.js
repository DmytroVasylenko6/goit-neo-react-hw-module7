import { createSelector } from '@reduxjs/toolkit'

export const selectNameFilter = (state) => state.filters.name

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, (state) => state.filters.name],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    )
  }
)
