<template>
  <div class="container">
    <div class="row">
      <Error class="col-md-8" v-if="checkError"/>
      <div class="col-lg-8" v-else>
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="card-title">{{ category.name }} {{ format }} [{{ productsCount }} items]</h2>
            <p class="card-text">{{ category.description | stripHTML }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3" v-for="product in paginate" :key="product.id">
            <div class="card mb-4">
              <div class="card-image-div">
                <img class="card-img-top" @error="setDefaultImage"
                     :src="product.imageFilename | buildImageUrlByFileName"
                     :alt="product.name"/>
              </div>
              <div class="card-body">
                <h2 class="card-title h6">{{ product.name }}</h2>
                <NuxtLink class="btn btn-primary standard-blue-btn"
                          :to="`/product/${category.slug}/${product.slug}`">Read more <i
                  class="bi bi-arrow-right-square"></i></NuxtLink>
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
      <CategoriesWidget/>
    </div>
  </div>
</template>

<script>
import img from "@/assets/img/no-image.jpg"
import CategoriesWidget from "@/components/Widgets/CategoriesWidget";
import Error from "@/components/Tools/Error";

export default {
  name: 'CategoryContent',
  components: {Error, CategoriesWidget},
  props: {
    category: {
      type: Array | Object
    },
  },
  data() {
    return {
      productsCount: 0,
      format: '',
      currentPage: 1,
      itemsPerPage: 20,
      itemsPerPageValues: [20, 40, 60, 80],
      resultCount: 0
    }
  },

  computed: {
    checkError() {
      return this.$store.state.errors.errorOnCategoryPage
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

  created() {
    this.setFormat()
  },

  methods: {
    setDefaultImage(e) {
      e.target.src = img
    },

    setFormat() {
      let value = this.$options.filters.getFormatByPath(this.$route.params.category)
      if (value !== 'CDDVD') {
        this.format = value
      } else {
        this.format = 'A4'
      }
    },

    setPage(pageNumber) {
      this.currentPage = pageNumber
    },
  }

}
</script>

<style lang="scss">
@import "styles/styles";

.card-image-div {
  display: flex;
  justify-content: center;
  min-height: 274px;
}

.card-title {
  min-height: 50px;
}

.current {
  a {
    background-color: $blue-color;
    color: white;
  }
}

.items-per-page {
  margin-left: 1em;
  max-width: 75px;
  color: $blue-color;
}
</style>
