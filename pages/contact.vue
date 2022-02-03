<template>
  <div class="main-container">
    <Navbar/>
    <br>
    <ContactContent/>
    <HomePageFooter/>
  </div>
</template>

<script>
import HomePageFooter from "@/components/Tools/HomePageFooter";
import Navbar from "@/components/Tools/Navbar";
import ContactContent from "@/components/Page/ContactContent";

export default {
  name: 'ContactPage',
  components: {ContactContent, Navbar, HomePageFooter}
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
