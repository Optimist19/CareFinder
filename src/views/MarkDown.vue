<template>
  <div>
    <div class="showMarkDown-div">
      <router-link :to="{name: 'MarkDownDynRouting', params:{id: showMarkDown.id}}"
        v-for="showMarkDown in $store.state.storeUsermarkDown"
        :key="showMarkDown.id"
        class="showMarkDown"
      >
        <p v-html="showMarkDown.user"></p>
        <p>{{ showMarkDown.date }}</p>
      </router-link>
    </div>

    <aside>
      <div class="note-textarea">
        <h3>NOTE</h3>
        <textarea v-model="userNote" cols="50" rows="10"></textarea>
      </div>
      <button @click="usermarkDownArr">push</button>
    </aside>
  </div>
</template>

<script>
import { ref} from "vue"
import {useStore} from "vuex"

export default {
  name: "MarkDown",
  
  setup(){
	let userNote = ref("")
	let store = useStore()


	const usermarkDownArr = () =>{
		store.commit("markdownToArr", userNote.value)
    }


	return{
		userNote,
      usermarkDownArr,
	  store
	}
  }

};
</script>

<style scoped>

a{
	color: black;
	text-decoration: none;
}

.showMarkDown-div{
  padding-top: 3vh;
  margin: 0 2vw;
  display: flex;
  flex-wrap: wrap;
  gap: 6vh 2vw;
}

.showMarkDown{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
  overflow: auto;
  width: 30vw
}

.showMarkDown p{
  margin: 2vh 0;
}

aside{
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.note-textarea{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.preview{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.preview div{
  border: 1px solid #42b983;
  width: 30vw;
  height: 35vh;
  /* overflow-wrap: break-word; */
  white-space: break-spaces;
  word-wrap: break-word;
}
</style>
