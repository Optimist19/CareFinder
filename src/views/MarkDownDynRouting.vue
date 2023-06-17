<template>
  <div>
	<p>{{ result.id }}</p>
	<p v-html=" result.user"></p>
    <p>{{ result.date }}</p>
  </div>
  <div></div>
</template>

<script>
// import store from "../store/index"
import {useStore} from "vuex"
import { useRoute } from "vue-router"
import {ref} from "vue"
export default {
	name: "MarkDownDynRouting",
	setup(){

		let route = useRoute()
		let store = useStore()
		let result = ref(null)
		let data = store.state.storeUsermarkDown
		console.log(data.value, "data")

		let id = route.params.id


		result.value = data.find(a => a.id === parseInt(id))
		console.log(result.value, "result")
		return{
			id,
			data,
			result
		}
	}
}
</script>

<style scoped>

</style>