<template>
    <nav>
		<div class="logo">
			<img alt="Vue logo" src="https://media.istockphoto.com/id/1205755672/vector/doctor-point-logo-vector-design.jpg?s=612x612&w=0&k=20&c=am4xjzUkQFXigdiDkKfD6N52aiW4Zixkh-wILVlLAAM=">
			</div>
			<div class="router-btn">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>|
			<router-link to="/login" id="login">Login</router-link> |
			<router-link id="signup" to="/signup">Sign Up</router-link> |
			<button id="logOut" @click="logOut">Sign Out</button> |
			<label for=""><strong>{{ $store.state.userEmail }}</strong></label>
		</div>
  </nav>
</template>

<script>
import {useStore} from "vuex"
import {useRouter} from "vue-router"


export default {
	name: "NavBar",

	setup(){
    const store = useStore()



    const logOut = () =>{
      store.commit("signOutAccont", "")
    }


    return{
      logOut
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

nav a:hover{
  color: #42b983;
  
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

label{
  color: #42b983;
}

</style>