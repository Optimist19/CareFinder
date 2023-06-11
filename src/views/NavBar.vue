<template>
    <nav>
		<div class="logo">
			<img alt="Vue logo" src="https://media.istockphoto.com/id/1205755672/vector/doctor-point-logo-vector-design.jpg?s=612x612&w=0&k=20&c=am4xjzUkQFXigdiDkKfD6N52aiW4Zixkh-wILVlLAAM=">
			</div>
			<div class="router-btn">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/login" id="login">Login</router-link> |
			<button id="logOut" @click="logOut">Sign Out</button> |
			<label for=""><strong>{{ userEmail }}</strong></label>
		</div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import {useRouter} from "vue-router"
import { ref } from 'vue';

export default {
	name: "NavBar",
	props:{
		userEmail: String
	},
	setup(props){
    const router = useRouter()
    console.log(props, "props worked")
	// let showNameInitials = ref("")
	let userEmail = ref(props.userEmail)
	console.log(userEmail, "props worked")

	// // const name = "Oluwasegun Bamidele";
	// let names = initialNames.split(" ");
	// let firstName = names[0].charAt(0);
	// let lastName = names[names.length - 1].charAt(0);
	
	// showNameInitials.value = `${firstName}${lastName}`

	// console.log(firstName); // Output: O
	// console.log(lastName); // Output: B




    const logOut = () =>{

      const auth = getAuth();
		
      signOut(auth).then(() => {
		// let hideLogOut = document.getElementById("logOut")
		// 	hideLogOut.style.display = "none"
        console.log("Sign-out successful")
        alert("Sign-out successful")
        // Sign-out successful.
        router.push({name: "login"})
      }).catch((error) => {
        // An error happened.
        console.log("Sign-out unsuccessful")

      });
    }


    return{
      logOut,
	  userEmail
	//   initialNames,
	//   showNameInitials
    }
  }
}
</script>

<style scoped>
nav{
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  background-color: black;
  position: fixed;
  z-index: 1;
}

nav .logo{
  flex: 0.9;
}

nav img{
  width: 18vw;
  height: 20.5vh;
  /* border: 1px solid red; */
}


nav a, button,label{
  color: rgb(250, 249, 246);
  text-decoration: none;
  cursor: pointer;
}
nav a.router-link-exact-active {
  color: #42b983;
}

nav button{
  border: none;
  background: red;
  padding: 1vh 2vw;
  border-radius: 3px;
}

</style>