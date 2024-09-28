<template>
  <Layout title="Товары">
    <ProductList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import ProductList from '@/components/ProductList/ProductList.vue';

export default {
  name: 'Products',
  components: {
    Layout,
    ProductList,
  }
}
</script>
