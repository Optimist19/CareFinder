<template>
	<div class="container">
		<div class="form-div">
			<h1>Login your details here</h1>
			<p>
				<label for="">
					Don't have an account?
					<router-link to="/signup">
						Create your account
					</router-link>
					, it takes less than a minute
				</label>
			</p>
			<form @submit.prevent="form">
				<input type="text" v-model="formDetails.email" placeholder="Email" required/>
				<input type="password" v-model="formDetails.password" placeholder="Password" required/>
				
				<div class="btn-div">
					<button type="submit">Login</button>
				</div>
				<!-- <div>
					<router-link to="/signup">Sign up / Register</router-link>
				</div> -->
			</form>

			<button @click="googleSignUp">Sign up with Google</button>
		</div>
	</div>
</template>

<script>
import { onMounted, reactive, ref} from 'vue'
import { useStore } from 'vuex';

export default{
	name: "LoginComp",

	setup(){

		const store = useStore();
		const canonicalUrl = ref('');


		const formDetails = reactive({
			email: "",
			password: ""
		})

		function form(){
			store.dispatch('signInWithEmailAndPasswordAction', formDetails)
		}

		function googleSignUp(){
			store.dispatch("googleSignUpAction")
		}
		

		onMounted(()=>{
			let hideLogIn = document.getElementById("login")
			hideLogIn.style.display = "none"

			let hideLogOut = document.getElementById("logOut")
			hideLogOut.style.display = "none"

			document.title = "Login"

			const metaDescription = document.createElement('meta');
			metaDescription.name = 'description';
			metaDescription.content = 'This is login page of the application. A user can as well sign up using google account.';
			document.head.appendChild(metaDescription);

			const canonicalLink = document.createElement('link');
			canonicalLink.rel = 'canonical';
			canonicalLink.href = canonicalUrl.value;
			document.head.appendChild(canonicalLink);
			console.log(canonicalUrl)
		})
		

		return{
			formDetails,
			form,
			googleSignUp,
			canonicalUrl
		}
	}
};
</script>

<style scoped>
.container{
	background-color: #42b983;
	height: 100vh;
	padding-top: 25vh;
}

.form-div{
	background-color: rgb(255, 254, 251);
	max-width: 40vw;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto 10vh auto;
	box-shadow: 5px 10px #888888;
}

h1{
	margin-bottom: 3vh;
}


p{
	margin-bottom: 2vh;
}

p a{
	text-decoration: none;
}


form{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* position: relative; */
}


input{
	margin: 2vh 0;
	padding: 1vh 2vw;
	font-size: 20px;
	border: none;
    border-bottom: 1px solid black;
    outline: none;
}

input::placeholder{
	font-size: 20px;
}



button{
	margin-top: 2vh;
	padding: 1.5vh 2.5vw;
	background-color: #42b983;
	color: white;
	border-radius: 2px; 
	border: none;
	cursor: pointer;
	transition: color 0.5s ease-in-out;
	font-weight: bold;
}

button:hover{
	color: #42b983;
	background-color: white;
}


</style>