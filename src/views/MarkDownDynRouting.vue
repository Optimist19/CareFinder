<template>
	<NavBarComp />
	<MarkdownDynamicComp />
	<FooterComp />
  
</template>

<script>
import NavBarComp from "../components/NavBarComp.vue"
import FooterComp from "../components/FooterComp.vue"
import MarkdownDynamicComp from "../components/MarkdownDynamicComp.vue"


import {useStore} from "vuex"
import { useRoute } from "vue-router"
import {ref, onMounted} from "vue"
export default {
	name: "MarkDownDynRouting",
	components: {
		NavBarComp,
		FooterComp,
		MarkdownDynamicComp
	}
}
</script>

<style scoped>
</style>