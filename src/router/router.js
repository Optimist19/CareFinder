import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUp from '../views/SignUp.vue'
import MarkDownDynRouting from '../views/MarkDownDynRouting.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import fire from "../firebase/firebase"





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
   
    meta: { 
      requiresAuth: true ,
      title: 'Home'
    }
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { 
      requiresAuth: true ,
      title: 'About'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    // meta: { title: 'Login' }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    // meta: { title: 'Sign Up' }
  },
  {
    path: '/markdownDynRouting/:id',
    name: 'MarkDownDynRouting',
    component: MarkDownDynRouting,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      console.log("user is logged in", user)
      const uid = user.uid;
      
      // ...
    } else {
      // User is signed out
      console.log("user is signed out", user)
      // ...

    }
  });

  if(to.meta.requiresAuth){
    if(auth.currentUser){
      document.title = to.meta.title || 'Default Page Title';
      console.log(auth.currentUser,"auth.currentUser")
      next();
    }else{
      next("/login");
    }
  }else{
    next()
  }
})


export default router
