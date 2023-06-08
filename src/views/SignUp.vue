<template>
	<NavBar />
	<div>
		<h1>This is Sign up / register page</h1>
		<div class="form-div">
			<form @submit.prevent="form">
				<input type="text" v-model="lastName" placeholder="Last Name" />
				<input type="text" v-model="firstName" placeholder="First Name" />
				<input type="text" v-model="gender" placeholder="Gender" />

				<input type="text" v-model="email" placeholder="Email" />
				<input type="password" v-model="password" placeholder="Password" />
				<input type="password" v-model="verifyPassword" placeholder="Confirm Password" />
				<div class="btn-div">
					<button type="submit">Sign up</button>
				</div>
			</form>
		</div>
		<FooterView />
	</div>
</template>

<script>
import FooterView from "./FooterView.vue"
import NavBar from "./NavBar.vue"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import SignUp from "./SignUp.vue"
import { reactive, toRefs, onMounted } from 'vue'
import { useRouter } from "vue-router";
export default{
	name: "SignUp",
	components:{
		FooterView,
		NavBar
	},
	setup(){
		const router = useRouter()
		
		const formDetails = reactive({
			lastName: "",
			firstName: "",
			gender: "",
			email: "",
			password: "",
			verifyPassword: ""
		})


		function form(){
			console.log("The register form details:",formDetails)

			const auth = getAuth();
			createUserWithEmailAndPassword(auth, formDetails.email, formDetails.password, formDetails.lastName, formDetails.firstName, formDetails.gender, formDetails.verifyPassword)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// ...
				console.log("The createUserWithEmailAndPassword worked",user)
				alert("You have successfully Signed Up")
				router.replace({name: "home"})
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
		}

		onMounted(()=>{
			let hideLogOut = document.getElementById("logOut")
			hideLogOut.style.display = "none"
		})

		return{
			...toRefs(formDetails),
			form
		}
	}
}
</script>
<style scoped>
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