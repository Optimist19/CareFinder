<template>
	<div class="markdown-con">
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
  
	  <div class="noteText-div">
		<div class="note-textarea">
		  <h1>Create contents here</h1>
		  <textarea v-model="userNote" cols="50" rows="10"></textarea>
		</div>
		<button @click="usermarkDownArr">Post</button>
	  </div>
	</div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue"
  import {useStore} from "vuex"
  
  export default {
	name: "MarkdownComp",
	
	setup(){
	  let userNote = ref("")
	  let store = useStore()
  
  
	  const usermarkDownArr = () =>{
		  store.commit("markdownToArr", userNote.value)
	  userNote.value = ""
	}
  
	onMounted(() => {
		const metaDescription = document.createElement('meta');
		metaDescription.name = 'description';
		metaDescription.content = 'This is the page that forms part of the home page, in this particular page, a user uses the markdown to create contents in the application.';
		document.head.appendChild(metaDescription);
  
	  });
  
  
	  return{
		userNote,
		usermarkDownArr,
		store
	  }
	}
  
  };
  </script>
  
  <style scoped>
  .markdown-con{
	margin-bottom: 3vh;
  }
  
  
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
	padding: 2vh 0;
  }
  
  .noteText-div{
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	gap: 0 2vw;
	margin: 0 auto;
	margin-top: 3vh;
  }
  
  .note-textarea{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  }
  
  
  button{
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
  
  button:hover{
	  color: #42b983;
	  background-color: white;
  }
  </style>
  