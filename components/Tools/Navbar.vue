<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/"><img src="@/assets/img/logo.png" alt=""></NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li v-for="(route, name) in tabs">
              <NuxtLink class="nav-link" :to="route">{{ name.toUpperCase() }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      tabs: {
        home: '/',
        products: '/category/all',
        about: '/about',
        contact: '/contact'
      }
    }
  },
}
</script>

<style lang="scss">
@import "styles/styles";

.navbar-nav {
  a {
    color: black !important;
  }

  a:hover {
    color: $blue-color !important;
  }
}

.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
