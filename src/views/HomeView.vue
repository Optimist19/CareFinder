<template>
  <NavBar />
  <header>
    <video autoplay muted loop>
    
    <source src="../assets/backvid.mp4" type="video/mp4">
    </video>
    <div class="speech">
      <img src="https://rea.gov.ng/wp-content/uploads/2020/11/coat-of-arm.png" alt="">
      <p>Locate hospitals close to you</p>
    </div>
  </header>
  <main>
    
      <form @submit.prevent="addHospitals">
        <label>
          <input type="text" v-model="hospitalName">
        </label>
        <label>
          <input type="text" v-model="hospitalAdd">
        </label>
        <label>
          <input type="text" v-model="hospitalWeb">
        </label>

        <button>Add Hospital</button>
      </form>
      <!-- <div class="list">
        <ul v-for="list in result" :key="list[0]">
          //<li>{{list[0]}}</li>

          <li>{{list[1].hospitalName}}</li>
          <li>{{list[1].hospitalAdd}}</li>
          <li>{{list[1].hospitalWeb}}</li>
        </ul>
      </div> -->
      <div>
        
        <div class="hospital-icons" v-if="isLoading">
          <i class="fa-solid fa-house-medical fa-beat"></i>
          <i class="fa-solid fa-house-medical fa-beat"></i>
          <i class="fa-solid fa-house-medical fa-beat"></i>
        </div>
        <table v-else>
          <!-- <thead>
            
            <th>HOSPITAL'S NAME:</th>
            <th>HOSPITAL'S ADDRESS:</th>
            <th>HOSPITAL'S WEBSITE:</th>
          </thead>
          <tbody>
            <tr>
              KEY:<li>{{list[0]}}</li>
              <td>{{list[1].hospitalName}}</td>
              <td>{{list[1].hospitalAdd}}</td>
              <td>{{list[1].hospitalWeb}}</td>
            </tr>
          </tbody> -->
          
          <tr>
            <th>HOSPITAL'S NAME:</th>
            <th>HOSPITAL'S ADDRESS:</th>
            <th>HOSPITAL'S WEBSITE:</th>
          </tr>
          <tr v-for="list in result" :key="list[0]">
            <td>{{list[1].hospitalName}}</td>
            <td>{{list[1].hospitalAdd}}</td>
            <td>{{list[1].hospitalWeb}}</td>
          </tr>
        </table>
      </div>
  </main>
  <FooterView />
</template>

<script>
import FooterView from "./FooterView.vue"
import NavBar from "./NavBar.vue"
import firebaseDB from "../firebase/firebase"
import { reactive, toRefs, ref, onMounted } from "vue"
import { ref as firebaseRef, push, onValue } from "firebase/database";

export default {
  name: 'HomeView',
  components: {
    FooterView,
    NavBar
  },

  setup() {
    let result = ref("")
    let db = firebaseDB
    let isLoading = ref(true)

    console.log(result.value)
    console.log(db)

    let fireRef = firebaseRef(db, "hospitalLocation")
    console.log(fireRef)

    let hospitals = reactive({
      hospitalName: "",
      hospitalAdd: "",
      hospitalWeb: ""
    })

    const addHospitals = () => {
      console.log(hospitals)
      push(fireRef, hospitals)
      fetchHospitals()
    }

    function fetchHospitals() {
      onValue(fireRef, (snapshot) => {
        console.log(snapshot)
        isLoading.value = false
        let response = Object.entries(snapshot.val())
        // let key = Object.keys(snapshot.val())
        // let values = Object.values(snapshot.val())
        // let value = Object.values(snapshot.val())
        result.value = response
        // console.log(key)
        // console.log(values)

        // result.value.push(values)
        console.log(result)
        console.log(result.value)
      }, {
        onlyOnce: true
      });
    }

    onMounted(()=>{
      let hideLogIn = document.getElementById("login")
      hideLogIn.style.display = "none"

      let signup = document.getElementById("signup")
      signup.style.display = "none"

    //   fetchHospitals()
    })

    return {
      ...toRefs(hospitals),
      addHospitals,
      fetchHospitals,
      result,
      isLoading
    }
  }
}
</script>

<style scoped>
header {
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

header .speech {
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

header .speech img {
  opacity: 0.1;
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-left: 7vw;
}

header video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* ul{
  border: 1px solid red;
} */

.hospital-icons{
  color: #42b983;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 3vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}

th, td {
  /* border: 1px solid red; */
  /* text-align: left; */
  padding: 2vh 3vw;
}

td{
  font-size: 20px;
}

tr:nth-child(even) {
  background-color: #42b983;
  color: rgb(250, 249, 246);
}

/* footer{
  height: 20vh;
  background-color: white;
} */
</style>
