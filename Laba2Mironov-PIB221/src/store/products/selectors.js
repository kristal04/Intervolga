export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('products/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['products/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('products/removeItem', id);
}

export const addItem = (store, { title, cost, volume, receptionist }) => {
  const { dispatch } = store;
  dispatch('products/addItem', { title, cost, volume, receptionist });
}

export const updateItem = (store, { id, title, cost, volume, receptionist }) => {
  const { dispatch } = store;
  dispatch('products/updateItem', { id, title, cost, volume, receptionist });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['products/itemsByKey'][id] || {};
}
