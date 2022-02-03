<template>
  <div class="main-container">
    <Navbar/>
    <br>
    <AboutContent/>
    <HomePageFooter/>
  </div>
</template>

<script>
import HomePageFooter from "@/components/Tools/HomePageFooter";
import Navbar from "@/components/Tools/Navbar";
import AboutContent from "@/components/Page/AboutContent";

export default {
  name: 'AboutPage',
  components: {AboutContent, Navbar, HomePageFooter}
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
