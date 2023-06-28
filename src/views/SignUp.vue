<template>
	<NavBarComp />
	<SignUpComp />
	<FooterComp />
</template>

<script>
import SignUpComp from "../components/SignUpComp.vue"
import NavBarComp from "../components/NavBarComp.vue"
import FooterComp from "../components/FooterComp.vue"
export default{
	name: "SignUp",
	components:{
		NavBarComp,
		FooterComp,
		SignUpComp
	}
}
</script>
