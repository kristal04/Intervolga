export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('receptionists/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;
  return getters['receptionists/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('receptionists/removeItem', id);
}

export const addItem = ( store, { receptionist, name } ) => {
  const { dispatch } = store;
  dispatch('receptionists/addItem', { receptionist, name });
}

export const updateItem = ( store, { id, receptionist, name }) => {
  const { dispatch } = store;
  dispatch('receptionists/updateItem', { id, receptionist, name });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['receptionists/itemsByKey'][id] || {};
}
