<template>
    <nav>
		<div class="logo">
			<img alt="Vue logo" src="../assets/carefinder.log.jpg"/>
			</div>
			<div class="router-btn">
        <div>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>|
          <router-link to="/login" id="login">Login</router-link> |
          <router-link id="signup" to="/signup">Sign Up</router-link> |
          <button id="logOut" @click="logOut">Sign Out</button> |

        </div>
        <div>
          <label>
            <strong>{{ $store.state.userEmail }}</strong>
          </label>
        </div>
		  </div>
  </nav>
</template>

<script>
import {useStore} from "vuex"
import {onMounted, ref} from "vue"


export default {
	name: "NavBar",

	setup(){
    const store = useStore()


    const logOut = () =>{
      store.commit("signOutAccont", "")
    }

    onMounted(() => {
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = "This page has our home page link, about page link, signout page link, has the logo of the application and the user's email.";
      document.head.appendChild(metaDescription);

    });

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
  font-weight: bold;
}

label{
  color: #42b983;
}


@media only screen and (max-width: 420px) {
  .router-btn{
    display: grid;
    justify-content: center;
    align-items: center;
  }

}

@media only screen and (max-width: 768px) {
  .router-btn{
    display: grid;
    justify-content: center;
    align-items: center;
  }
}

</style>