<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <button @click="logOut">Sign Out</button>
  </nav>
  <router-view/>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import {useRouter} from "vue-router"
export default{
  name: "App",
  setup(){
    const router = useRouter()

    const logOut = () =>{

      const auth = getAuth();
      signOut(auth).then(() => {
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
      logOut
    }
  }
}
</script>

<style>

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
