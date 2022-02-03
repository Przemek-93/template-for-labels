<template>
  <div class="main-container">
    <Navbar/>
    <br>
    <AllProductsContent/>
    <HomePageFooter/>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Tools/Navbar';
import HomePageFooter from "@/components/Tools/HomePageFooter";
import AllProductsContent from "@/components/Page/AllProductsContent";

export default {
  name: 'Category',
  components: {AllProductsContent, HomePageFooter, Navbar},

  created() {
    const fetchProducts = async () => {
      await axios.get(`/api/${process.env.apiAllProductsURL}`)
        .then(response => {
          this.$store.commit('errors/resolveErrorOnAllProductsPage')
          this.setProducts(response)
        })
        .catch(e => {
          this.$store.commit('errors/addErrorOnAllProductsPage', true)
          console.error(`Status code: ${e.response.data.status}, message: ${e.response.data.detail}`)

        })
    };

    fetchProducts()
  },

  methods: {
    setProducts(response) {
      this.$store.commit('products/add', response.data.products)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
