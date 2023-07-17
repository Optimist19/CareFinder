<template>
  <div class="container">
    <header>
      <video autoplay muted loop>
        <source src="../assets/backvid.mp4" type="video/mp4" />
      </video>
      <div class="speech">
        <img
          src="https://rea.gov.ng/wp-content/uploads/2020/11/coat-of-arm.png"
          alt=""
        />
        <p>Locate hospitals close to you</p>
      </div>
    </header>
    <main>
      <div class="filter">
        <i class="fa-solid fa-filter"></i>
        <input
          type="text"
          v-model="search"
          placeholder="filter/sort by location"
        />
      </div>

      <form @submit.prevent="addHospitals">
        <label>
          <input
            type="text"
            v-model="hospitalName"
            placeholder="Name"
            required
          />
        </label>
        <label>
          <input
            type="text"
            v-model="hospitalAdd"
            placeholder="Address"
            required
          />
        </label>
        <label>
          <input
            type="text"
            v-model="hospitalWeb"
            placeholder="Website"
            required
          />
        </label>

        <button>Add Hospital</button>
      </form>

      <!-- <div v-for="fil in filter" :key="fil">
			{{ fil }}
		  </div> -->

      <div class="hospital">
        <div class="hospital-icons" v-if="isLoading">
          <i class="fa-sharp fa-solid fa-spinner fa-spin"></i>
        </div>
        <table v-else>
          <tr>
            <th>HOSPITAL'S NAME:</th>
            <th>HOSPITAL'S ADDRESS:</th>
            <th>HOSPITAL'S WEBSITE:</th>
          </tr>
          <!-- <tr v-for="list in result" :key="list[0]"> -->
          <tr v-for="list in setSearch" :key="list[0]">
            <td>{{ list[1].hospitalName }}</td>
            <td>{{ list[1].hospitalAdd }}</td>
            <td>{{ list[1].hospitalWeb }}</td>
          </tr>
        </table>
        <button @click="toExportHospitalData" class="exportDataBtn">
          Export Data
        </button>
      </div>
      <MarkdownComp />
    </main>
  </div>
</template>

<script>
import firebaseDB from "../firebase/firebase";
import { reactive, toRefs, ref, onMounted, watch } from "vue";
import { ref as firebaseRef, push, onValue } from "firebase/database";
import MarkdownComp from "./MarkdownComp.vue";
import csvDownload from "json-to-csv-export";
import swal from "sweetalert";
import { nextTick } from "vue";

export default {
  name: "HomeView",
  components: {
    MarkdownComp
  },

  setup() {
    let result = ref([]);
    let db = firebaseDB;
    let isLoading = ref(true);
    let search = ref("");
    let setSearch = ref("");
    const canonicalUrl = ref("");
    let forExport = ref("");

    //   console.log(result.value)
    //   console.log(db)

    let fireRef = firebaseRef(db, "hospitalLocation");
    //   console.log(fireRef)

    let hospitals = reactive({
      hospitalName: "",
      hospitalAdd: "",
      hospitalWeb: ""
    });

    watch(search, function () {
      setSearch.value = result.value.filter((item) =>
        item[1].hospitalAdd.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    const addHospitals = () => {
      // console.log(hospitals)
      push(fireRef, hospitals);
      fetchHospitals();
      // alert("Thanks, it has been successfully added")
      swal({
        title: "Good job!",
        text: "Thanks, it has been successfully added",
        icon: "success",
        button: "OK!"
      });
      console.log("Thanks, it has been successfully added");
      (hospitals.hospitalName = ""),
        (hospitals.hospitalAdd = ""),
        (hospitals.hospitalWeb = "");
    };

    function fetchHospitals() {
      onValue(
        fireRef,
        (snapshot) => {
          console.log(snapshot);
          isLoading.value = false;
          let response = Object.entries(snapshot.val());
          // let key = Object.keys(snapshot.val())
          let values = Object.values(snapshot.val());
          // let value = Object.values(snapshot.val())
          result.value = response;
          setSearch.value = response;
          // console.log(key)
          console.log(values);
          dataToConvert.data = values;

          // result.value.push(values)
          console.log(result);
          console.log(result.value);
          // console.log(result.value[1])
          // forExport.value = result
        },
        {
          onlyOnce: true
        }
      );
    }

    // console.log(forExport.value)
    console.log(forExport);

    onMounted(() => {
      nextTick(() => {
        // Your code here

        let hideLogIn = document.getElementById("login");
        if (hideLogIn) {
          hideLogIn.style.display = "none";
          console.log(hideLogIn, "hideLogIn");
        }

        let signup = document.getElementById("signup");
        if (signup) {
          signup.style.display = "none";
          console.log(signup, "signup");
        }
      });
      // document.title = "Home"

      const metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "This is home page to where to see the list of all hospitals in Nigeria and also you get to make use of markdown.";
      document.head.appendChild(metaDescription);

      const canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = canonicalUrl.value;
      document.head.appendChild(canonicalLink);

      fetchHospitals();
    });

    // The code below is for exporting CSV file
    // Putting this object in reactive also did work
    const dataToConvert = {
      data: "", //the objects in the database which is already in an array was passed to this property in fetchHospitals()
      filename: "HospitalData",
      delimiter: ",",
      headers: ["hospitalAdd", "hospitalName", "hospitalWeb"]
    };

    function toExportHospitalData() {
      csvDownload(dataToConvert);
    }

    console.log(forExport);
    return {
      ...toRefs(hospitals),
      addHospitals,
      fetchHospitals,
      result,
      isLoading,
      // filter,
      search,
      setSearch,
      canonicalUrl,
      forExport,
      dataToConvert,
      toExportHospitalData
    };
  }
};
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


main {
  background-color: rgb(255, 249, 240);
}
main .filter {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1vw;
  color: #42b983;
}

main .filter i {
  margin: 0 1vw;
}

input {
  margin: 2vh 0;
  padding: 1vh 2vw;
  font-size: 20px;
  border: none;
}

input::placeholder {
  font-size: 20px;
}

button {
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

button:hover {
  color: #42b983;
  background-color: white;
}

.hospital-icons {
  color: #42b983;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  margin-bottom: 2vh;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin: 3vh 0;
}

th,
td {
  padding: 2vh 3vw;
}

td {
  font-size: 20px;
}

tr:nth-child(even) {
  background-color: #42b983;
  color: rgb(250, 249, 246);
}

form {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.exportDataBtn {
  margin-left: 2vw;
}


@media only screen and (max-width: 375px) {
  form {
    display: grid;
  }

  td {
    font-size: 10px;
    padding: 2px 3px;
  }

  header p{
    font-size: 20px;
  }

  main .filter i {
    display: none;
  }

  input::placeholder {
    font-size: 16px;
  }
}


@media only screen and (max-width: 769px) {
  form {
    display: grid;
  }

  td {
    font-size: 17px;
  }

  header p{
    font-size: 23px;
  }


  input::placeholder {
    font-size: 18px;
  }
}


@media only screen and (max-width: 946px) {
  form {
    display: grid;
  }

  td {
    font-size: 17px;
  }


  input::placeholder {
    font-size: 18px;
  }
}
</style>
