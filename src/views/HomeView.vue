<template>
  <NavBar />
  <main>
    <video autoplay muted loop>
    <!-- https://www.youtube.com/embed/eAw364jQsWk?controls=0 -->
    <source src="../assets/backvid.mp4" type="video/mp4">
    </video>
    <div class="speech">
      <img src="https://rea.gov.ng/wp-content/uploads/2020/11/coat-of-arm.png" alt="">
      <p>Locate hospitals close to you</p>
    </div>
  </main>
  <FooterView />
</template>

<script>
// @ is an alias to /src
import FooterView from "./FooterView.vue"
import NavBar from "./NavBar.vue"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export default {
  name: 'HomeView',
  components:{
    FooterView,
    NavBar
  },

  mounted(){
    let hideLogIn = document.getElementById("login")
    hideLogIn.style.display = "none"
  }
}
</script>

<style scoped>
main{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

video {
  position: absolute;
  /* margin-top: 30vh; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

main .speech{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  /* text-align: center; */
  font-size: 44px;
  margin-top: 7vh;
}

main .speech img{
  opacity: 0.1;
  border-radius: 50%;
  width: 250px; 
  height: 250px;
  object-fit: cover;
  margin-left: 7vw;
}

main video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}


/* footer{
  height: 20vh;
  background-color: white;
} */
</style>
