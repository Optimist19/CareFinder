<template>
	<div class="container">
		<div class="p-con">
			<!-- <p>{{ result.id }}</p> -->
			<p v-html=" result.user"></p>
			<p>{{ result.date }}</p>
		</div>
	</div>
</template>

<script>
import {useStore} from "vuex"
import { useRoute } from "vue-router"
import {ref, onMounted} from "vue"
export default {
	name: "MarkdownDynamicComp",
	setup(){

		let route = useRoute()
		let store = useStore()
		let result = ref(null)
		
		let data = store.state.storeUsermarkDown
		console.log(data.value, "data")

		let id = route.params.id


		result.value = data.find(a => a.id === parseInt(id))
		console.log(result.value, "result")

		onMounted(()=>{
			let hideLogIn = document.getElementById("login")
			hideLogIn.style.display = "none"

			let signup = document.getElementById("signup")
			signup.style.display = "none"

			document.title = "Content"

			const metaDescription = document.createElement('meta');
			metaDescription.name = 'description';
			metaDescription.content = 'This page is a dynamical routing, which makes part of the home page, when a user uses the markdown to make a content and the user wants to have a glance of it long content.';
			document.head.appendChild(metaDescription);

		})
		return{
			id,
			data,
			result
		}
	}
}
</script>

<style scoped>
.container{
	background-color: rgb(255, 249, 240);
	height: 100vh;
}

.p-con{
	padding-top: 24vh;
	margin: 0 2vw;
}

p{
	margin: 2vh 0
}
</style>