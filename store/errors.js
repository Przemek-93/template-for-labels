export const state = () => ({
  errorOnCategoryPage: false,
  errorOnAllProductsPage: false,
  errorOnAllProductsPageAttr: false,
  errorOnAllProductsPageFiltered: false,
  errorOnSingleProductPage: false
})

export const mutations = {
  addErrorOnCategoryPage(state, data) {
    state.errorOnCategoryPage = data
  },
  addErrorOnAllProductsPage(state, data) {
    state.errorOnAllProductsPage = data
  },
  addErrorOnAllProductsPageAttr(state, data) {
    state.errorOnAllProductsPageAttr = data
  },
  addErrorOnAllProductsPageFiltered(state, data) {
    state.errorOnAllProductsPageFiltered = data
  },
  addErrorOnSingleProductPage(state, data) {
    state.errorOnSingleProductPage = data
  },
  resolveErrorOnCategoryPage(state) {
    state.errorOnCategoryPage = false
  },
  resolveErrorOnAllProductsPage(state) {
    state.errorOnAllProductsPage = false
  },
  resolveErrorOnAllProductsPageAttr(state) {
    state.errorOnAllProductsPageAttr = false
  },
  resolveErrorOnAllProductsPageFiltered(state) {
    state.errorOnAllProductsPageAttr = false
  },
  resolveErrorOnSingleProductPage(state) {
    state.errorOnSingleProductPage = false
  },
  removeAllErrors(state) {
    state.errorOnCategoryPage = state.errorOnAllProductsPage = state.errorOnSingleProductPage = true
  }
}
