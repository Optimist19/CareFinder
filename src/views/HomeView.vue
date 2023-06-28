<template>
  <div class="container">
    <NavBarComp />
    <HomeComp />
    <FooterComp />
  </div>
</template>

<script>
import HomeComp from "../components/HomeComp.vue"
import FooterComp from "../components/FooterComp.vue"
import NavBarComp from "../components/NavBarComp.vue"


export default {
  name: 'HomeView',
  components: {
    HomeComp,
    FooterComp,
    NavBarComp,
  
  }
}
</script>
