<template>
  <NavBarComp />
  <AboutComp />
  <FooterComp />


</template>


<script>
import AboutComp from "../components/AboutComp.vue"
import FooterComp from "../components/FooterComp.vue"
import NavBarComp from "../components/NavBarComp.vue"
export default {
	name: "footerView",

  components:{
    FooterComp,
    NavBarComp,
    AboutComp
  },
}

</script>

<style scoped>
</style>
