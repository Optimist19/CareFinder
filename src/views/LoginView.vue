<template>
	<NavBar :userEmail="userEmail"/>
	<div class="container">
		<h1>This is login page</h1>
		<div class="form-div">
			<button @click="googleSignUp">Sign up with Google</button>
			<form @submit.prevent="form">
				<input type="text" v-model="email" placeholder="Email" />
				<input type="password" v-model="password" placeholder="Password" />
				<div class="btn-div">
					<button :disabled="!email && !password" type="submit">Login</button>
				</div>
				<div>
					<router-link to="/signup">Sign up / Register</router-link>
				</div>
			</form>
			{{ userEmail }}
		</div>
		<FooterView />
	</div>
</template>

<script>
<FooterView />
import FooterView from "./FooterView.vue"
import NavBar from "./NavBar.vue"
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { onMounted, reactive, toRefs, ref, watch } from 'vue'
export default{
	name: "LoginView",

	components:{
		FooterView,
		NavBar
	},

	setup(){
		const router = useRouter()
		let userEmail = ref("okk")
		

		const formDetails = reactive({
			email: "",
			password: ""
		})


		function form(){
			console.log("The form details:",formDetails)

			const auth = getAuth();

			signInWithEmailAndPassword(auth, formDetails.email, formDetails.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// userEmail.value = "hello"
				console.log(userEmail.value)
				console.log("the userEmail work")
				console.log("you have successfully logged in", user)
				alert("you have successfully logged in")
				router.push({name: "home"})
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Sorry bro", errorMessage, errorCode)
			});

			// if(auth.currentUser){
			// 	router.push({path: "/"})
			// }
		}


		function googleSignUp(){
			const provider = new GoogleAuthProvider();

			const auth = getAuth();
			signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...
				console.log("googleSignUp worked", user)
				console.log("googleSignUp worked userEmail", user.email)
				userEmail.value = "user.email"
				// userEmail.value = "hello"
				console.log(userEmail.value)
				console.log(userEmail.value, "the username")
			
				router.push({name: "home"})
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("googleSignUp did worked", errorMessage)

				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});

			// if(auth.currentUser){
			// 	router.push({name: "home"})
			// }
		}
		
		watch(userEmail, (update) => [
			console.log(update, "update")
		])

		onMounted(()=>{
			// let hideLogIn = document.getElementById("login")
			// hideLogIn.style.display = "none"

	
			let hideLogOut = document.getElementById("logOut")
			hideLogOut.style.display = "none"
		})
		

		return{
			...toRefs(formDetails),
			form,
			googleSignUp,
			userEmail
		}
	}
};
</script>

<style scoped>

.container{
	padding-top: 20vh;
}
.form-div{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 65vh;
	margin: 0 auto;
	width: 30vw;
	background-color: rgba(127, 255, 212, 0.2);
}

input{
	display: block;
	margin: 2vh 0;
	padding-top: 1.5vh; 
	padding-bottom: 1.5vh; 
	width: 20vw;
	padding-left: 10px;
}

input::placeholder{
	padding-left: 3px;
}

.form-div div{
	display: flex;
	justify-content: center;
	align-items: center;
}

.btn-div{
	margin-bottom: 6vh;
}

button{
	display: block;
	padding: 1vh 1.5vw; 
	cursor: pointer;
}


a{
	text-decoration: none;
	color: red;
}

/* footer{
  height: 20vh;
  background-color: white;
} */
</style>