<template>
	<NavBar />
	
	<div class="container">
		<div class="form-div">
			<h1>Sign Up</h1>

			<form @submit.prevent="form">
				<input type="text" v-model="lastName" placeholder="Last Name" required/>
				<input type="text" v-model="firstName" placeholder="First Name" required/>
				<input type="text" v-model="gender" placeholder="Gender" required/>

				<input type="text" v-model="email" placeholder="Email" required/>
				<input type="password" v-model="password" placeholder="Password" required/>
				<input type="password" v-model="verifyPassword" placeholder="Confirm Password" required/>
				<div class="btn-div">
					<button type="submit">Sign up</button>
				</div>
			</form>
			<div class="login">
				
				<router-link to="/login">
					Login
				</router-link>
				
			</div>
		</div>
		<FooterView />
	</div>
</template>

<script>
import FooterView from "./FooterView.vue"
import NavBar from "./NavBar.vue"

import { reactive, toRefs, ref, onMounted } from 'vue'

import { useStore } from 'vuex';


export default{
	name: "SignUp",
	components:{
		FooterView,
		NavBar
	},
	setup(){
		let store =  useStore()
		const canonicalUrl = ref('');
		const formDetails = reactive({
			lastName: "",
			firstName: "",
			gender: "",
			email: "",
			password: "",
			verifyPassword: ""
		})

		function form(){
			store.dispatch("createUserWithEmailAndPasswordAction", formDetails)
		}

		onMounted(()=>{
			let hideLogOut = document.getElementById("logOut")
			hideLogOut.style.display = "none"

			let signup = document.getElementById("signup")
      		signup.style.display = "none"

			  const metaDescription = document.createElement('meta');
			metaDescription.name = 'description';
			metaDescription.content = 'This page handles user signing out of the application.';
			document.head.appendChild(metaDescription);

			const canonicalLink = document.createElement('link');
			canonicalLink.rel = 'canonical';
			canonicalLink.href = canonicalUrl.value;
			document.head.appendChild(canonicalLink);
		})

		return{
			...toRefs(formDetails),
			form,
			canonicalUrl
		}
	}
}
</script>
<style scoped>
.container{
	background-color: #42b983;
	height: 100%;
	padding-top: 30vh;
	
}

.form-div{
	background-color: rgb(255, 254, 251);
	max-width: 40vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
	box-shadow: 5px 10px #888888;
	margin-bottom: 10vh;
	padding-bottom: 5vh;
	padding-top: 3vh;
}

h1{
	margin-bottom: 3vh;
}


.login{
	margin-top: 2vh;
}

.login a{
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
}

button:hover{
	color: #42b983;
	background-color: white;
}




</style>