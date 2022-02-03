<template>
  <div class="main-container">
    <Navbar/>
    <br>
    <CategoryContent v-bind:category="category"/>
    <HomePageFooter/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Tools/Navbar';
import CategoryContent from '@/components/Page/CategoryContent';
import HomePageFooter from "@/components/Tools/HomePageFooter";

export default {
  name: 'Category',
  components: {HomePageFooter, CategoryContent, Navbar},
  data() {
    return {
      categorySlug: this.$route.params.category,
      products: [],
      category: []
    }
  },

  created() {
    const fetchProducts = async () => {
      await axios.get(`/api/${process.env.apiCategoryURL}${this.categorySlug}`)
        .then(response => {
          this.$store.commit('errors/resolveErrorOnCategoryPage')
          this.setProducts(response)
          this.setCategory(response)
        })
        .catch(e => {
          this.$store.commit('errors/addErrorOnCategoryPage', true)
          console.error(`Status code: ${e.response.data.status}, message: ${e.response.data.detail}`)
        })
    };

    fetchProducts()
  },

  methods: {
    setProducts(response) {
      this.$store.commit('products/add', response.data.products)
    },

    setCategory(response) {
      this.category = response.data.category;
    }
  }
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
