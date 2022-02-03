<template>
  <div class="container">
    <div class="row">
      <Error class="col-md-8" v-if="checkError"/>
      <div class="col-lg-8" v-else>
        <div class="card mb-4">
          <img class="card-img-top product-content-image" :src="productImageUrl" @error="setDefaultImage"
               :alt="product.slug"/>
          <br/>
          <div class="card-body">
            <h4 class="card-title-product">{{ product.name }} [ {{ product.paperSize }} ]</h4>
            <p class="card-text">{{ description }}</p>
            <div class="row mb-2">
              <div class="col-lg-6">
                <div class="card-details" v-if="productDetails">
                  Details
                  <div v-for="detail in productDetails">
                    <div class="card-details-row" v-if="detail.value">
                      <div class="row-name">{{ detail.name }}:</div>
                      <div class="row-value">{{ detail.value }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card-download" v-if="product.pdfFilename || product.wordFilename">
                  <div>Download Template</div>
                  <a target="_blank" v-if="product.pdfFilename"
                     :href="product.pdfFilename | buildProductTemplateDownloadsUrl">
                    <i title="click to download template in word format"
                       class="bi bi-file-earmark-word download-icons icon-word standard-blue-btn"></i>
                  </a>
                  <a target="_blank" v-if="product.wordFilename"
                     :href="product.wordFilename | buildProductTemplateDownloadsUrl">
                    <i title="click to download template in pdf format"
                       class="bi bi-file-earmark-pdf download-icons icon-pdf standard-blue-btn"></i>
                  </a>
                </div>
                <a target="_blank" :href="productStoreUrl">
                  <button type="button" class="btn btn-primary go-to-product-btn standard-blue-btn">
                    Check price on FLEXILABELS STORE!
                    <i class="bi bi-arrow-right-square"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
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
  name: 'ProductContent',
  components: {Error, CategoriesWidget},
  props: {
    product: {
      type: Array | Object
    }
  },

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 15,
      resultCount: 0
    }
  },

  computed: {
    checkError() {
      return this.$store.state.errors.errorOnSingleProductPage
    },

    description() {
      const strippedDescription = this.$options.filters.stripHTML(this.product.description);
      if (strippedDescription !== this.product.name) {
        return strippedDescription.trim();
      }

      return null;
    },

    productStoreUrl() {
      return this.$options.filters.buildProductStoreUrl(this.$route.params.category, this.$route.params.product);
    },

    productImageUrl() {
      return this.$options.filters.buildImageUrlByFileName(this.product.imageFilename)
    },

    productDetails() {
      return {
        height: {
          name: 'Label Height(mm)',
          value: this.product.height
        },
        width: {
          name: 'Label Width(mm)',
          value: this.product.width
        },
        paperSize: {
          name: 'Paper format',
          value: this.product.paperSize
        },
        shape: {
          name: 'Label shape',
          value: this.product.shape
        },
        viewAcross: {
          name: 'Count of labels horizontally',
          value: this.product.viewAcross
        },
        viewDown: {
          name: 'Count of labels vertically',
          value: this.product.viewDown
        }
      }
    }
  },

  methods: {
    setDefaultImage(e) {
      e.target.src = img
    }
  }
}
</script>

<style lang="scss">
.product-content-image {
  padding-top: 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

.card-title-product {
  min-height: 50px;
}

.card-details-row {
  display: flex;

  .row-name {
    width: 55%;
  }
}

.download-icons {
  font-size: 2.5em;
  border-radius: 5px;
}

.go-to-product-btn {
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
