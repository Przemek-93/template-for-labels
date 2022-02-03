<template>
  <div class="col-lg-4">
    <div class="card mb-4">
      <div class="card-header">Categories</div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <ul class="list-unstyled mb-0 categories-list">
              <li class="all-products-cat">
                <NuxtLink to="/category/all">All Products</NuxtLink>
              </li>
              <select v-model="selected" class="form-select" aria-label="Default select example"
                      @change="handleSelect()">
                <option v-for="value in selectValues" :value="value">{{ value.toUpperCase() }}</option>
              </select>
              <li v-if="this.isDvdCatVisible">
                <NuxtLink to="/category/cddvd-labels">Disk Labels (CD/DVD)</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="`/category/${selected}-sheet-oval-labels`">Oval Labels</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="`/category/${selected}-sheet-rectangle-labels`">Rectangular Labels</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="`/category/${selected}-sheet-round-labels`">Round / Circular Labels</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="`/category/${selected}-sheet-square-labels`">Square Labels</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesWidget',
  data() {
    return {
      selected: '',
      isDvdCatVisible: true,
      selectValues: ['a4', 'a3', 'sra3']
    }
  },

  created() {
    this.setSelected()
  },

  methods: {
    handleSelect() {
      this.setDvdLabelsVisibility()
    },

    setDvdLabelsVisibility() {
      this.isDvdCatVisible = this.selected === this.selectValues[0]
    },

    setSelected() {
      let value = this.$options.filters.getFormatByPath(this.$route.params.category).toLowerCase()
      if (this.selectValues.includes(value)) {
        this.selected = value
      } else {
        this.selected = this.selectValues[0]
      }

      this.setDvdLabelsVisibility()
    }
  }
}
</script>

<style lang="scss">
@import 'styles/styles';

.categories-list {
  a:hover {
    color: $blue-color;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }

  .all-products-cat {
    margin-bottom: 1em;
  }
}
</style>
