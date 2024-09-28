import { createStore } from 'vuex'
import products from './products';
import receptionists from './receptionists';
export default createStore({
  modules: {
    products,
    receptionists,
  },
  state: {},
  mutations: {},
  actions: {},
})
