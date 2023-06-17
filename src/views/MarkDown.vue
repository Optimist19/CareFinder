<template>
  <div>
    <div class="showMarkDown-div">
      <router-link :to="{name:'MarkDownDynRouting', params:{id:showMarkDown.id}}"
        v-for="showMarkDown in storeUsermarkDown"
        :key="showMarkDown.id"
        class="showMarkDown"
      >
        <!-- <p>{{ showMarkDown.id }}</p> -->
        <p v-html="showMarkDown.user"></p>
        <p>{{ showMarkDown.date }}</p>
      </router-link>
    </div>

    <aside>
      <div class="note-textarea">
        <h3>NOTE</h3>
        <textarea v-model="userNote" cols="50" rows="10"></textarea>
      </div>
      <div class="preview">
        <h3>PREVIEW</h3>
        <!-- <div>{{ userNote }}</div> -->
        <!-- <div>{{ markdown }}</div> -->
        <div v-html="markdown"></div>
      </div>
      <button @click="usermarkDownArr">push</button>
    </aside>
  </div>
</template>

<script>
// import MarkdownIt from 'markdown-it';
// import DOMPurify from 'dompurify';
import { ref, computed } from "vue"
import { useStore } from 'vuex';


export default {
  name: "MarkDown",
  
  setup(){
	let userNote = ref("")
    // let usermarkDown = ref("")
    // let storeUsermarkDown = ref([])
	let store = useStore()

	// const md = new MarkdownIt({
    //   html: true,
    //   breaks: true,
    //   linkify: true,
    // })

	const markdown = computed(() =>{

		store.commit("mark", userNote.value)
    })

	const usermarkDownArr = () =>{
		store.commit("button")
    }


	return{
		userNote,
      markdown,
    //   storeUsermarkDown,
      usermarkDownArr,
	}
  }

};
</script>

<style scoped>
.showMarkDown-div{
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

a{
	color: black;
	text-decoration: none;
}

aside{
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 0 2vw
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
