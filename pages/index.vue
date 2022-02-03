<template>
  <div class="main-container">
    <Navbar/>
    <HomePageHeader/>
    <HomeContent/>
    <HomePageFooter/>
  </div>
</template>

<script>
import HomePageHeader from "@/components/Tools/HomePageHeader";
import HomePageFooter from "@/components/Tools/HomePageFooter";
import HomeContent from "@/components/Page/HomeContent";
import Navbar from "@/components/Tools/Navbar";

export default {
  name: 'IndexPage',
  components: {HomePageHeader, HomeContent, Navbar, HomePageFooter}
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
