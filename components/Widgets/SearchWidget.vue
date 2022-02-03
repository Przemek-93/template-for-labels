<template>
  <div class="col-lg-4">
    <div class="card mb-4">
      <div class="card-header">Filters</div>
      <div class="card-body p-4">
        <div v-for="attribute in attributes" class="row mb-3">
          <div class="filters-headers">{{ attribute.name }}</div>
          <hr class="my-0"/>
          <div class="col-lg-6 mt-1" v-for="singleAttribute in attribute.attributes">
            <input type="checkbox" :value="singleAttribute.slug" v-model="attrSlugs"/> {{ singleAttribute.name }}
          </div>
        </div>
        <button class="btn btn-primary standard-blue-btn btn-filters" @click="this.onApplyFilters">Apply filters
        </button>
        <button class="btn btn-danger btn-filters" @click="attrSlugs = []">Reset filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SearchWidget',
  props: {
    attributes: {
      type: Array | Object
    }
  },

  data() {
    return {
      attrSlugs: [],
    }
  },

  methods: {
    async onApplyFilters() {
      if (this.attrSlugs.length === 0) {
        return;
      }

      await axios.post(`/api/${process.env.apiAllProductsByAttrURL}`, {
        attributes: this.attrSlugs
      })
        .then(response => {
          this.$store.commit('errors/resolveErrorOnAllProductsPageFiltered')
          this.setProducts(response)
        })
        .catch(e => {
          this.$store.commit('errors/addErrorOnAllProductsPageFiltered', true)
          console.error(`Status code: ${e.response.data.status}, message: ${e.response.data.detail}`)
        })
    },

    setProducts(response) {
      this.$store.commit('products/add', response.data.products)
    }
  }
}
</script>

<style lang="scss">
.btn-filters {
  font-size: 13px;
  float: right;
  margin-right: 5px;
}
</style>
