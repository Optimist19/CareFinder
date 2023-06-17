import { createStore } from 'vuex'
import router from '@/router/router';
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import MarkdownIt from 'markdown-it';
import DOMPurify from 'dompurify';
// import { useRouter } from "vue-router";



export default createStore({
  state: {
    userEmail: "",
   

    // MarkDown
    storeUsermarkDown: [],
    md: new MarkdownIt({
      html: true,
      breaks: true,
      linkify: true,
    })
  },
  getters: {
  },
  mutations: {

    signInWithEmailAndPasswordMutation(state, payload){
      state.userEmail = payload
    },
    
    googleSignUpMutation(state, payload){  
      state.userEmail = payload
    },

    createUserWithEmailAndPasswordMutation(state, payload){
      state.userEmail = payload
    },

    signOutAccont(state, payload){

      const auth = getAuth();
		
      signOut(auth).then(() => {

        state.userEmail = payload
        router.push({name: "login"})
        console.log("Sign-out successful")

        // Sign-out successful.

        alert("Sign-out successful")
      }).catch((error) => {
        // An error happened.
        console.log("Sign-out unsuccessful")

      });
    },

    markdownToArr(state, payload){
      const sanitiseUserInputHtml  = state.md.render(payload);

      
      state.storeUsermarkDown.push({
        id: Math.floor(Math.random() * 50),
        user: DOMPurify.sanitize(sanitiseUserInputHtml),
        date: new Date().toLocaleDateString()
      }) 
      console.log(state.storeUsermarkDown,"testing markdown")
      
      
      // return DOMPurify.sanitize(sanitiseUserInputHtml);
      
    }
    
  },

   actions: {

    signInWithEmailAndPasswordAction(context, payload){

			const auth = getAuth();
      
			// signInWithEmailAndPassword(auth, payload)
			signInWithEmailAndPassword(auth, payload.email, payload.password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
        console.log(user, "user")

        console.log("googleSignUp worked userEmail", user.email)

        context.commit("signInWithEmailAndPasswordMutation", user.email) 

				// console.log(state.userEmail)
				console.log("the userEmail work")
				console.log("you have successfully logged in", user)
				alert("you have successfully logged in")
        // const router = useRouter()

				router.push({name: "home"})
			})
			.catch((error) => {
        console.log(error, "error")
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("Sorry bro...", errorMessage, errorCode)
        alert("Sorry, we do not have your data, kindly signup")
			});

		
		},

    googleSignUpAction(context){
        const provider = new GoogleAuthProvider();
  
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
          console.log("googleSignUp worked", user)
          console.log("googleSignUp worked userEmail", user.email)

          context.commit("googleSignUpMutation", user.email) 
        
          router.push({name: "home"})
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("googleSignUp did worked", errorMessage)
  
          // The email of the user's account used.
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
  
        
    
    },

    createUserWithEmailAndPasswordAction(context, payload){
        if(payload.password !== payload.verifyPassword || payload.password.length <= 5 || payload.verifyPassword.length <= 5){
          console.log("There is a password conflict or your password is less than 6 characters")
          alert("There is a password conflict or your password is less than 6 characters")
        }else{
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, payload.email, payload.password, payload.lastName, payload.firstName, payload.gender, payload.verifyPassword)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("The createUserWithEmailAndPassword worked",user)
            
            context.commit("createUserWithEmailAndPasswordMutation", user.email)
            alert("You have successfully Signed Up")
            router.replace({name: "home"})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error, "error")
          });

        }
      
    }

  },

  modules: {
  }
})
