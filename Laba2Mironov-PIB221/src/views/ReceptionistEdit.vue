<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <ReceptionistForm
        :id="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/receptionists/selectors';
import Layout from '@/components/Layout/Layout';
import ReceptionistForm from '@/components/ReceptionistForm/ReceptionistForm.vue';
export default {
  name: 'ReceptionistEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    ReceptionistForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, receptionist, name }) => id ?
          updateItem(store, { id, receptionist, name }) :
          addItem(store, { receptionist, name }),
    };
  }
}
</script>

