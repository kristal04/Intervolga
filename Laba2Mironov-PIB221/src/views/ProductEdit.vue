<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <ProductForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/products/selectors';
import ProductForm from '@/components/ProductForm/ProductForm.vue';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'ProductEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    ProductForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, title, cost, volume, receptionist }) => id ?
          updateItem(store, { id, title, cost, volume, receptionist }) :
          addItem(store, { title, cost, volume, receptionist } )
    }
  }

}
</script>

