<template>
	<NavBarComp />
	<LoginComp />
	<FooterComp />
</template>

<script>
<FooterView />
import LoginComp from "../components/LoginComp.vue"
import FooterComp from "../components/FooterComp.vue"
import NavBarComp from "../components/NavBarComp.vue"



export default{
	name: "LoginView",

	components:{
		FooterComp,
		NavBarComp,
		LoginComp
	}
};
</script>


