<template>
  <div class="container">
    <div class="row">
      <Error class="col-lg-8" v-if="checkError"/>
      <div class="col-lg-8" v-else>
        <div class="row">
          <div class="col-md-2 card-product-all" v-for="product in paginate" :key="product.id">
            <div class="card">
              <div class="card-image-div-all">
                <img class="card-img-top" @error="setDefaultImage"
                     :src="product.imageFilename | buildImageUrlByFileName"
                     :alt="product.name"/>
              </div>
              <div class="card-body-all">
                <div class="card-title-all">{{ product.name }}</div>
                <div class="btn-all-container">
                  <NuxtLink class="btn btn-primary standard-blue-btn btn-all"
                            :to="`/product/all/${product.slug}`">Read more <i
                    class="bi bi-arrow-right-square"></i></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <nav aria-label="Pagination">
            <hr class="my-0"/>
            <ul class="pagination justify-content-center my-4">
              <li v-for="pageNumber in totalPages" :key="pageNumber.id" class="page-item" v-bind:key="pageNumber"
                  @click="setPage(pageNumber)"
                  :class="{current: currentPage === pageNumber, last: (pageNumber === totalPages && Math.abs(pageNumber - currentPage) > itemsPerPage), first:(pageNumber === 1 && Math.abs(pageNumber - currentPage) > itemsPerPage)}">
                <a class="page-link">{{ pageNumber }}</a>
              </li>
              <select v-model="itemsPerPage" class="form-select items-per-page">
                <option v-for="value in itemsPerPageValues" :value="value">{{ value }}</option>
              </select>
            </ul>
          </nav>
        </div>
      </div>
      <SearchWidget v-bind:attributes="attributes"/>
    </div>
  </div>
</template>

<script>
import img from "@/assets/img/no-image.jpg"
import SearchWidget from "@/components/Widgets/SearchWidget";
import axios from "axios";
import Error from "@/components/Tools/Error";

export default {
  name: 'AllProductsContent',
  components: {SearchWidget, Error},
  data() {
    return {
      attributes: '',
      currentPage: 1,
      itemsPerPage: 60,
      itemsPerPageValues: [60, 100, 200, 500, 1000],
      resultCount: 0
    }
  },

  created() {
    const fetchAttributes = async () => {
      await axios.get(`/api/${process.env.apiAttributesGroupsURL}`)
        .then(response => {
          this.$store.commit('errors/resolveErrorOnAllProductsPageAttr')
          this.setAttributes(response)
        })
        .catch(e => {
          this.$store.commit('errors/addErrorOnAllProductsPageAttr', true)
          console.error(`Status code: ${e.response.data.status}, message: ${e.response.data.detail}`)
        })
    };

    fetchAttributes()
  },

  computed: {
    checkError() {
      return (this.$store.state.errors.errorOnAllProductsPage ||
        this.$store.state.errors.errorOnAllProductsPageAttr ||
        this.$store.state.errors.errorOnAllProductsPageFiltered)
    },

    totalPages() {
      if (this.resultCount === 0) {
        return 1
      } else {

        return Math.ceil(this.resultCount / this.itemsPerPage)
      }
    },

    paginate() {
      const products = this.$store.state.products.list
      this.productsCount = products.length
      if (!products || products.length !== products.length) {
        return
      }

      this.resultCount = products.length
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages
      }

      let index = this.currentPage * this.itemsPerPage - this.itemsPerPage
      return products.slice(index, index + this.itemsPerPage)
    }
  },

  methods: {
    setDefaultImage(e) {
      e.target.src = img
    },

    setAttributes(response) {
      this.attributes = response.data
    },

    setPage(pageNumber) {
      this.currentPage = pageNumber
    }
  }
}
</script>

<style lang="scss">
.card-image-div-all {
  display: flex;
  justify-content: center;
  height: 135px;
  padding: 7px;
}

.card-product-all {
  padding: 3px;
}

.card-title-all {
  min-height: 63px;
  font-size: 12px;
  text-align: center;
  padding: 5px 5px;
}

.btn-all-container {
  display: flex;
  padding-bottom: 5px;
  justify-content: center;
}

.btn-all {
  margin: auto;
  font-size: 12px;
}
</style>
