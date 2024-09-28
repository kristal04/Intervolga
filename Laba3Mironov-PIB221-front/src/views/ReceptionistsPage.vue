<template>
  <Layout title="Приемщики">
    <ReceptionistList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import ReceptionistList from '@/components/ReceptionistList/ReceptionistList.vue';

export default {
  name: 'ReceptionistsPage',
  components: {
    Layout,
    ReceptionistList,
  }
}
</script>
