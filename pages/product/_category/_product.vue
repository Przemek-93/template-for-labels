<template>
  <div class="main-container">
    <Navbar/>
    <br>
    <ProductContent v-bind:product="product"/>
    <HomePageFooter/>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from '@/components/Tools/Navbar';
import ProductContent from '@/components/Page/ProductContent';
import HomePageFooter from "@/components/Tools/HomePageFooter";

export default {
  name: 'Product',
  components: {HomePageFooter, ProductContent, Navbar},
  data() {
    return {
      productSlug: this.$route.params.product,
      product: []
    }
  },

  created() {
    const fetchProduct = async () => {
      await axios.get(`/api/${process.env.apiProductURL}${this.productSlug}`)
        .then(response => {
          this.$store.commit('errors/resolveErrorOnSingleProductPage')
          this.setProduct(response)
        })
        .catch(e => {
          console.error(e)
          this.$store.commit('errors/addErrorOnSingleProductPage', true)
          console.error(`Status code: ${e.response.data.status}, message: ${e.response.data.detail}`)
        })
    };

    fetchProduct()
  },

  methods: {
    setProduct(response) {
      this.product = response.data
    }
  }
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
