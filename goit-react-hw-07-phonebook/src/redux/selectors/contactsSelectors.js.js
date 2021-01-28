import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => {
  return state.contacts.items;
};

export const getFilterValue = (state) => {
  return state.contacts.filter;
};

export const filtredContacts = createSelector(
  [getContacts, getFilterValue],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((elem) => {
      let comparePartofName = elem.name.substr(0, filter.length);
      if (comparePartofName.toLowerCase() === filter.toLowerCase()) {
        return elem.name;
      }
    });
  }
);
