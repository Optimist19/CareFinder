<template>
	<footer>
		<div class="footer-first">
			<a href="#"><i class="fa-brands fa-facebook fa-beat-fade"></i>Facebook</a>
			<a href="#"><i class="fa-brands fa-twitter fa-beat-fade"></i>Twitter</a>
			<a href="#"><i class="fa-brands fa-square-instagram fa-beat-fade"></i>Instagram</a>
		</div>
		<div class="footer-second">
		&#169; 2023 Oluwasegun
		</div>
  	</footer>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
	name: "footerComp",
	setup() {

    	onMounted(() => {
			const metaDescription = document.createElement('meta');
			metaDescription.name = 'description';
			metaDescription.content = 'This is the footer of the application, which has the social media handles to contact.';
			document.head.appendChild(metaDescription);
			
		});
	}
}
</script>

<style scoped>
footer{
  height: 20vh;
  background-color: black;
  /* color: rgb(250, 249, 246); */
  color: #42b983;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-first{
	margin-bottom: 3px;
}


a{
	color: #42b983;
	text-decoration: none;
	margin: 0 3vw;
}

i{
	margin: 0 0.5vw;
}

.second-first{
	margin-top: 3px;
}
</style>